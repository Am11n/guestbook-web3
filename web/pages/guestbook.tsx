import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useGuestbookEntries, useAddGuestbookEntry, useWatchGuestbookEntries } from "../lib/guestbook";

export default function Guestbook() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Head>
        <title>Web3 Guestbook - Sign the Guestbook</title>
        <meta name="description" content="A Web3 on-chain guestbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12 py-6 border-b border-purple-200 bg-white rounded-2xl shadow-sm px-6">
          <div>
            <h1 className="text-4xl font-bold text-purple-600">
              Guestbook
            </h1>
            <p className="text-gray-600 mt-2">Leave your mark on the blockchain</p>
          </div>
          <div className="flex items-center space-x-4">
            <ConnectButton 
              showBalance={false}
              chainStatus="none"
            />
          </div>
        </header>

        {!isConnected ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                {/* Wallet icon for disconnected state */}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect Your Wallet</h2>
              <p className="text-gray-600 mb-8">
                Connect your wallet to sign the guestbook and view messages from the community.
              </p>
              <div className="flex justify-center">
                <ConnectButton 
                  showBalance={false}
                  chainStatus="none"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Add Entry Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-purple-100">Sign the Guestbook</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Leave your message..."
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Your entry will be stored permanently on the blockchain
                  </p>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isPending ? "Submitting..." : "Sign Guestbook"}
                  </button>
                </div>
                {isSuccess && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    Entry added successfully! Your message is now on the blockchain.
                  </div>
                )}
                {isError && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    Error adding entry. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Entries List */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Guestbook Entries</h2>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  {entries.length} entries
                </span>
              </div>
              
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
                  <p className="mt-4 text-gray-600">Loading entries...</p>
                </div>
              ) : entries.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* Removed SVG icon */}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No entries yet</h3>
                  <p className="text-gray-600">Be the first to sign the guestbook!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {[...entries].reverse().map((entry, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow duration-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">{entry.name}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(Number(entry.timestamp) * 1000).toLocaleString()}
                          </p>
                        </div>
                        <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {entry.sender.substring(0, 6)}...{entry.sender.substring(entry.sender.length - 4)}
                        </span>
                      </div>
                      <p className="text-gray-700">{entry.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-purple-100 mt-12">
        <p>Built with Web3 technologies • Entries stored permanently on the blockchain</p>
      </footer>
    </div>
  );
}