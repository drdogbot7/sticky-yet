function areWeStickyYet( selector ) {
  var stickyThing = document.querySelector( selector );
  var CSSTop = parseInt( getComputedStyle( stickyThing, null ).getPropertyValue("top"), 10);
  window.addEventListener( 'scroll', function() {
    if ( stickyThing.getBoundingClientRect().top <= CSSTop ) {
      stickyThing.classList.add('is_sticky');
      return
    }
    stickyThing.classList.remove('is_sticky');
  });
};

module.exports = areWeStickyYet;
export default areWeStickyYet;
