# Are we Sticky Yet??

`Position:Sticky` is pretty well supported… All I want to do is stick one little thing to the top of the viewport… Is it too much to ask to KNOW when this thing is sticking? This script attempts to add the class 'is-sticky' to sticky positioned elements when they 'stick' and remove it when they are no longer doing that.

It does not do anything else. StickyBits (supposedly) does this too and also functions as a polyfill and has more features and stuff.

# Install

```
npm install sticky-yet --save
```

# Use

```
// Regular
<script scr="your-dumb-path/sticky-yet/dist/index.js"></script>

// ES6 import
import stickyYet from 'sticky-yet';

// Require... is that a thing?
const stickyYet = require('sticky-yet').default

// Do your CSS
.site-header {
  position:sticky;
  top:0;
}

stickyYet('.site-header');

```

# Does this work?

I have tested this when sticking **a single thing** to the top of the viewport, including with an offset. I have not tried this with multiple things, or with things that stick to the bottom.
