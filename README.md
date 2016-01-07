# liveGallery
- iPhone 6s live photo emulation with CSS3, HTML5 and JS

# Idea
- The idea behind lvgllry is to give the the same vibe experience when you are immersed in a live photo on an iPhone 6s.
- Emulate the effect of live photos using pure JS, CSS3, and HTML5(EJS)

# How?
- Well the first step was to figure out how to spoof a live photo... like what the heck is the file type anyway? After doing some research im not quite suprised that a live photo is comprised of two file types interlocked at inception a JPEG and a full HD mov... So the process of combination should be simple compress these two together!
- The next step was to figure out how to interlock the files... There is an app for that, actually a few... 
    - The first I found was Lively https://itunes.apple.com/us/app/lively-export-live-photo-to/id1049711205?mt=8
      - This one wasn't exactly what I needed. 
    - Second was LP converter. NOPE has watermarks NO.   
      - More about those. http://www.cultofmac.com/393065/how-to-turn-live-photos-into-shareable-gifs/
    - Finally I found Live.ly Converter, it accomplished everything I needed and more.
- I converted all of my assets and compressed them using handbreak (to make them web ready)
- Then I wrote a healper file to store each file from my dirs into seperate arrays and convert them to JSON (did this by hand) TODO: make this automatic
- The next part of my project was to overlay some events on each video tag using jQuery to add bluriness on hover (TODO: make this on hold - Kind has been tricky)
- The last part was to get it up on the web and make it look pretty etc...

# Why?
- Because I can.

# Contribute?
- If you think something could be better or more effecient I really really would love a PR! I am learning node.js, and all this good stuff. Please make me aware of any bad practices or ugly stuff.

# Enough talking (try it out)

<a href="lvgllry.herokuapp.com" alt="lvGllry">Lv Gllry</a>

#Preview
![alt tag](https://github.com/RobinsonKameron/liveGallery/blob/master/gifs/lvgllry_2.gif?raw=true)

%Tech used%
- Node.js ⚙
- EJS 📝
- HTML5 🖌
- CSS3 🌅
- JS 🔩
- jQuery 🛠
- NPM 📦
- GIT ⏪
- Heroku *🔨toolbelt🗜*

