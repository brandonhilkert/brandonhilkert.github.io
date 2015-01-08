window.Widget = {
  widget: $(".subscribe-widget"),
  open: $(".subscribe-widget .open"),
  close: $(".subscribe-widget .close"),

  init: function(){
    this.widget.fadeIn("slow");
  },

  show: function(){
    this.widget.animate({ bottom: 0 });
    this.open.fadeOut();
    this.close.fadeIn();
  },

  hide: function(){
    this.widget.animate({ bottom: "-280px" });
    this.close.fadeOut();
    this.open.fadeIn();
  }
}

function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}

$(document).on("click", ".subscribe-widget .title, .subscribe-widget .open", function(e){
  Widget.show();
  ga('send', 'event', 'widget-course', 'clicked');
});

$(document).on("click", ".subscribe-widget .close", function(e){
  Widget.hide();
});

var subscribeButton = document.getElementById('widget-subscribe-button');
addListener(subscribeButton, 'click', function() {
  ga('send', 'event', 'widget-newsletter', 'subscribed');
})

$(document).ready(function(){
  Widget.init();
  ga('send', 'event', 'widget-newsletter', 'viewed');
});

