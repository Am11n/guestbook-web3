import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useGuestbookEntries, useAddGuestbookEntry, useWatchGuestbookEntries } from "../lib/guestbook";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { isConnected } = useAccount();
  const { entries, isLoading, refetch } = useGuestbookEntries();
  const { addEntry, isPending, isSuccess, isError } = useAddGuestbookEntry();

  // Listen for new entries and refresh the list
  useWatchGuestbookEntries(() => {
    refetch();
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      addEntry(name, message);
      setName("");
      setMessage("");
    }
  };

  return (
    <div>
      <Head>
        <title>Web3 Guestbook</title>
        <meta name="description" content="A Web3 on-chain guestbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Web3 Guestbook</h1>
          <ConnectButton />
        </div>

        {!isConnected ? (
          <div className="text-center py-12">
            <p className="text-xl mb-4">Please connect your wallet to view and sign the guestbook</p>
          </div>
        ) : (
          <div>
            {/* Add Entry Form */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Sign the Guestbook</h2>
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </button>
                {isSuccess && (
                  <p className="mt-2 text-green-600">Entry added successfully!</p>
                )}
                {isError && (
                  <p className="mt-2 text-red-600">Error adding entry. Please try again.</p>
                )}
              </form>
            </div>

            {/* Entries List */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Guestbook Entries</h2>
              {isLoading ? (
                <p>Loading entries...</p>
              ) : entries.length === 0 ? (
                <p>No entries yet. Be the first to sign!</p>
              ) : (
                <div className="space-y-4">
                  {[...entries].reverse().map((entry, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{entry.name}</h3>
                        <span className="text-sm text-gray-500">
                          {new Date(Number(entry.timestamp) * 1000).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{entry.message}</p>
                      <p className="text-sm text-gray-500">
                        Address: {entry.sender.substring(0, 6)}...{entry.sender.substring(entry.sender.length - 4)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}