#### 7/20/24; 5:11:40 PM by DW

A package that's used by archiver, minimatch, uses a feature that's only available in a version of Node that doesn't work on my Mac running High Sierra (v10.13.6). I'm trying to roll back the archiver version to 5.3.1 which was released on Apr 15, 2022 to see if that fixes the problem. 

That didn't help. Now trying the "resolutions" thing

"resolutions": {

"minimatch": "7.0.0"

},

And that didn't help either.

But! I was able to solve the problem by asking ChatGPT what's the most recent version of Node that will run on my High Sierra Mac, I installed it and the app that uses this package works! Yay. This probably means I can run FeedLand on my desktop again, that'll make a huge difference. Whew.

<a href="https://chatgpt.com/share/03415b34-70b4-4384-92b6-0595bd609597">https://chatgpt.com/share/03415b34-70b4-4384-92b6-0595bd609597</a>

BTW, this affects everything that uses daveappserver. 

