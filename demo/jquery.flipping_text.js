/* ===========================================================
 * jquery-flipping_text.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an intro animation for your
 * typography
 *
 * https://github.com/peachananr/flipping_text
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    tickerTime: 10,
    customRandomChar: false,
    tickerCount: 10,
    opacityEffect: true,
    resetOnChange: false
	};
	
	var onblur = false;
	
	function Timer(callback, delay) {
      var timerId, start, remaining = delay;

      this.pause = function() {
          window.clearTimeout(timerId);
          remaining -= new Date() - start;
      };

      this.resume = function() {
          start = new Date();
          timerId = window.setTimeout(callback, remaining);
      };

      this.resume();
  }
  
	
  $.fn.flipping_text = function(options){
    
    var els = this;
    
    resetAll = function(els){
      els.each(function (index) {
        $(this).css({
          opacity: 1,
          visibility: "visible"
        }).text($(this).data("ft-text"));
      });
    }
    
    return this.each(function (index) {    
      if ($(this).data("delay") !== undefined) {
        var data_delay = $(this).data("delay") + 0;
      } else {
        var data_delay = 0;
      }
      
     
      
      var settings = $.extend({}, defaults, options),
          el = $(this),
          count = el.text().length;
          
       
      
      function randString() {
        
        var text = el.text(),
            char_pos = 0;
        if (settings.customRandomChar != false) {
          var random_char = settings.customRandomChar;
        } else {
          var random_char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        }
        
        
        el.attr("data-ft-text", text).html("");
        
        
        for(var i=0; i < count; i++) {
          el.append("<span data-ft-bk='" + text.charAt(i) + "' class='ft_char" + i + "'></span>");
          var timeout = new Timer(function() {
            char_pos = char_pos + 1;
            var j_count = 0;
            
            if (onblur == true) {
              return false;
            } else {
              for(var j=0; j < settings.tickerCount; j++) {
                
                var el2 = el.find(".ft_char" + (char_pos - 1));
                
                var timeout2 = new Timer(function() {
                  if (onblur == true) {
                    return false;
                  } else {
                    
                    if (j_count == (settings.tickerCount - 2)) {
                      
                      el2.css("opacity", "1").text(el2.data("ft-bk"));
                      return false;
                    } else {
                      if (settings.opacityEffect == true) {
                        var opacity = (j_count / settings.tickerCount);
                      } else {
                        var opacity = 1;
                      }
              
                      el2.css("opacity", opacity).text(random_char.charAt(Math.floor(Math.random() * random_char.length)));
                      j_count++;
                    }
                  }
                  
                }, j * (settings.tickerTime));
                
                
              }
            }
          }, (i + 1) * (settings.tickerTime * settings.tickerCount));  
        }
      }
      
      if (settings.resetOnChange == true) {
        $(window).on("blur", function() {
          onblur = true;
          resetAll(els);
        });
      }
      
      el.css("visibility", "hidden");
      var global = new Timer(function() {
        if (onblur == true) {
          return false;
        } else {
          el.css("visibility", "visible");
          randString();
        }
      }, data_delay * index); 
    });  
  }
}(window.jQuery);

