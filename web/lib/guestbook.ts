import { useReadContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import { GUESTBOOK_ADDRESS, GUESTBOOK_ABI } from './contract';

// Define the Entry type based on the smart contract
export type Entry = {
  sender: `0x${string}`;
  name: string;
  message: string;
  timestamp: bigint;
};

// Hook to read entries from the guestbook
export function useGuestbookEntries() {
  const { data, isError, isLoading, refetch } = useReadContract({
    address: GUESTBOOK_ADDRESS,
    abi: GUESTBOOK_ABI,
    functionName: 'getEntries',
  });

  return {
    entries: (data as Entry[]) || [],
    isError,
    isLoading,
    refetch,
  };
}

// Hook to add an entry to the guestbook
export function useAddGuestbookEntry() {
  const { writeContract, isPending, isSuccess, isError, data } = useWriteContract();

  const addEntry = (name: string, message: string) => {
    writeContract({
      address: GUESTBOOK_ADDRESS,
      abi: GUESTBOOK_ABI,
      functionName: 'addEntry',
      args: [name, message],
    });
  };

  return {
    addEntry,
    isPending,
    isSuccess,
    isError,
    data,
  };
}

// Hook to listen for new entries
export function useWatchGuestbookEntries(callback: (entry: Entry) => void) {
  useWatchContractEvent({
    address: GUESTBOOK_ADDRESS,
    abi: GUESTBOOK_ABI,
    eventName: 'EntryAdded',
    onLogs: (logs) => {
      logs.forEach(log => {
        const { args } = log;
        if (args && args.sender && args.name && args.message && args.timestamp) {
          callback({
            sender: args.sender,
            name: args.name,
            message: args.message,
            timestamp: args.timestamp,
          });
        }
      });
    },
  });
}