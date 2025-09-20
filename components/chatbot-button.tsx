'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function ChatbotButton() {
  const openTidioChat = () => {
    // This checks if the Tidio API is loaded before trying to use it.
    if (typeof window !== 'undefined' && (window as any).tidioChatApi) {
      // These are the Tidio API calls to show and open the chat window.
      (window as any).tidioChatApi.show();
      (window as any).tidioChatApi.open();
    }
  };

  return (
    <Button
      onClick={openTidioChat}
      className="fixed bottom-4 left-4 rounded-full p-3 shadow-lg z-50"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Open chat</span>
    </Button>
  );
}
