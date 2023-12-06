import React from 'react';
import HeaderHome from '../components/header.jsx';
import Happening from '../components/editor.jsx';
 import TweetsMain from '../components/tweet.jsx';
 import TheNewYorkTimes from '../components/tweetbody.jsx';
import TweetCommit from '../components/tweetcommit.jsx';
import TweetCommitTwo from '../components/tweetcommittwo.jsx';
import TweetBodyTwo from '../components/tweetbodytwo.jsx';
import Siderbar from '../components/siderbar.jsx';

function Home() {

  return (
    <main className="timeline">
      <HeaderHome />
      <Happening />
      <TweetsMain />
      <TheNewYorkTimes />
      <TweetCommit />
      <TweetCommitTwo />
      <TweetBodyTwo />
      <Siderbar />
    </main>
  );
}

export default Home;