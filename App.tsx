import * as React from 'react';
import { DiscordPresence } from 'react-discord-presence';
import DiscordPresenceClassesDefault from 'react-discord-presence/dist/src/display/style/DiscordPresenceDefault.module.css';
import './style.css';

export default function App() {
  return (
    <div>

      <DiscordPresence
        args={{ developerId: '718622831788949575' }}
        data={{
          memberSince: new Date('6/6/2020'),
        }}
        classes={DiscordPresenceClassesDefault}
      />
    </div>
  );
}
