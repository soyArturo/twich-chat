import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat, Channel } from "stream-chat-react";
import Auth from "./components/Auth";
import "stream-chat-react/dist/css/index.css";
import MessagingContainer from "./components/MessagingContainer";
import Video from "./components/Video";

const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlci0xIn0.iLoVs37XEpzCYDzPzSMZymyz6Rg9Mn87GeJ5IgPFf0I";
const client = StreamChat.getInstance("mrvsnh4w5dft");

const App = () => {
  const [chatClient, setChatClient] = useState(false);
  const [chatChannel, setChatChannel] = useState(null);
  const authToken = false;

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: "user-1",
            name: "User 1",
          },
          userToken
        );
        const channel = await client.channel("gaming", "gaming-demo", {
          name: "Gaming Demo",
        });

        setChatChannel(channel);
        setChatClient(true);
      } catch (err) {
        console.log("ERROR", err);
      }
    };

    setupClient();
  }, []);

  if (!chatClient) return null;

  return (
    <>
      {!authToken && <Auth />}
      {authToken && (
        <Chat client={client} darkMode={true}>
          <Channel channel={chatChannel}>
            <Video />
            <MessagingContainer />
          </Channel>
        </Chat>
      )}
    </>
  );
};

export default App;
