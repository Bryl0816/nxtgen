import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your NXTGEN assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! Welcome to NXTGEN. How can I assist you with our services today?';
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return 'We offer Mobile App Development, Web Development, Cloud Hosting, and Graphic Design services. Which one interests you?';
    } else if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
      return 'Our Mobile App Development service includes iOS & Android Development, Flutter, UI/UX Design, and Performance Optimization. Would you like to know more?';
    } else if (lowerMessage.includes('web') || lowerMessage.includes('website')) {
      return 'Our Web Development service includes E-commerce Solutions, Modern Responsive Websites, Custom Software Solutions, and Real-Time Analytics. How can we help with your web project?';
    } else if (lowerMessage.includes('cloud') || lowerMessage.includes('hosting')) {
      return 'Our Cloud Hosting service provides 24/7 Monitoring, Auto-scaling, Security Management, and Backup Solutions. What type of hosting are you looking for?';
    } else if (lowerMessage.includes('design') || lowerMessage.includes('graphic')) {
      return 'Our Graphic Design service includes Logo Design, Brand Identity, Marketing Materials, UI/UX Design, and Social Media Graphics. What design services do you need?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      return 'For pricing information and custom quotes, please contact us directly. You can reach us at support.nxtgen@gmail.com or call +63 975 444 7123.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return 'You can contact us at:\n📧 support.nxtgen@gmail.com\n📞 +63 975 444 7123\n📍 Cauayan City, Isabela\n\nOr visit our Facebook page for more updates!';
    } else if (lowerMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return 'Thank you for visiting NXTGEN! Feel free to reach out anytime. Have a great day!';
    } else {
      return 'Thank you for your message! For specific inquiries about our services, pricing, or to start a project, please contact us directly at support.nxtgen@gmail.com or visit our Facebook page.';
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-saas-orange hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-80 h-96 bg-saas-darkGray border border-gray-700 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        {/* Header */}
        <div className="bg-saas-orange text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">NXTGEN Assistant</span>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-orange-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-saas-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-saas-orange text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 bg-saas-orange rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-saas-orange text-sm"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-saas-orange hover:bg-orange-600 text-white p-2"
              size="icon"
              disabled={inputValue.trim() === ''}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
