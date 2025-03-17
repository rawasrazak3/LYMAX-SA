function readyStateChanged() {
    // $("#pg-loader").fadeOut("slow");
}

$(document).on("readystatechange", readyStateChanged);

$(document).ready(function() {
    // add active class to menu
    var path = window.location.pathname;
    var activeURL = path.split("/").pop();
    console.log(activeURL);

    $(document).ready(function() {

        $(".goto-sec").on("click", function(e) {
            var href = jQuery(this).attr("href");
            $("html, body").animate({
                    scrollTop: jQuery(href).offset().top - 100,
                },
                1000
            );
            e.preventDefault();
        });

        $(".nav-item").removeClass("active");
        if (activeURL != "") {
            $('[href="./' + activeURL + '"]')
                .parents(".nav-item")
                .addClass("active");
            $('[href="./' + activeURL + '"]').addClass("active");
        } else {
            $('[href="/"]').parents(".nav-item").addClass("active");
        }


        // side navbar
        // $('.navbar-toggler').click(function() {
        //     $(this).toggleClass('collapsed');
        //     $('.side_navbar_wrapper').toggleClass('expanded');
        //     $('body').toggleClass('fixed');
        // })



        // search box
        $('.header_search_btn').click(function() {
            $('.search_box_wrapper').toggleClass('expanded');
            $('body').toggleClass('fixed');
        })

        $('.search_box_close_btn').click(function() {
            $('.search_box_wrapper').removeClass('expanded');
            $('body').removeClass('fixed');
        })




    });



    $(".input-effect .theme_input").focusout(function() {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    });
    $("#mute_btn").click(function() {
        if ($("video.bg_video").prop("muted")) {
            $("video.bg_video").prop("muted", false);
            $("#mute_btn i").addClass("fa-volume-up");
            $("#mute_btn i").removeClass("fa-volume-mute");
        } else {
            $("video.bg_video").prop("muted", true);
            $("#mute_btn i").removeClass("fa-volume-up");
            $("#mute_btn i").addClass("fa-volume-mute");
            // <i class="fas fa-volume-mute"></i>
            // $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
        }
    });

    // $(".range_value_box").text($(".range_input").val());
    // $(".range_input").on("input", function () {
    //   $(".range_value_box").text($(".range_input").val());
    //   controlThumbWidth = $(this).data("thumbwidth");
    //   var positionOffset =
    //     Math.round((controlThumbWidth * position) / 100) - controlThumbWidth / 2;
    //   $(".range_value_box")
    //     .css("left", "calc(" + position + "% - " + positionOffset + "px)")
    //     .text(".range_input");
    // });

    $(".range_value_box").text("£" + $(".range_input").val());
    $(".range_input").on("input", function() {
        $(".range_value_box").text("£" + $(this).val());
    });
});

// JavaScript for label effects only
// $(window).load(function () {

//     $(".input-effect input").focusout(function () {
//         if ($(this).val() != "") {
//             $(this).addClass("has-content");
//         } else {
//             $(this).removeClass("has-content");
//         }
//     })
// });

function close_search() {
    jQuery(".main-search-sec").removeClass("open");
    $("body").css("overflow", "auto");
}
$(".mobile_search,#search_opener").click(function() {
    $(".main-search-sec").addClass("open");
    $("body").css("overflow", "hidden");
});

$(".main_search_close").click(function() {
    close_search();
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 115) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("sticky_header");
    } else {
        $("header").removeClass("sticky_header");
    }
});
$(document).on("click", function(event) {
    var $trigger = $(".nav-item");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".nav-link").next(".nav_dropdown").removeClass("nav_dropdown--isActive");
        $(".nav-link").removeClass("Active");
    }
});

$(".search_sec input.checkbox").click(function() {
    if ($(".search_sec").hasClass("Active")) {
        $(".search_sec").removeClass("Active");
    } else {
        $(".search_sec").addClass("Active");
    }
});

$(".nav-link").click(function() {
    $(".nav-link").removeClass("Active");
    if ($(this).next(".nav_dropdown").hasClass("nav_dropdown--isActive")) {
        $(".nav-link").next(".nav_dropdown").removeClass("nav_dropdown--isActive");
    } else {
        $(".nav-link").next(".nav_dropdown").removeClass("nav_dropdown--isActive");
        $(this).next(".nav_dropdown").addClass("nav_dropdown--isActive");
        $(this).addClass("Active");
    }
});

// $('#play_button').click(function () {
//   console.log('a');
//     var video = $('.play_video_sec video');
//     if (video.get(0).paused == true) {
//         // Play the video
//         video.get(0).play();
//         console.log('b');
//         // $('.play_video_sec .col-md-12').hide();
//         // Update the button text to 'Pause'

//         $('.play_video_sec').addClass('v_played');
//         $('.play_video_sec #play_button i').removeClass('fa-play-circle');
//         $('.play_video_sec #play_button i').addClass('fa-pause-circle');

//     } else {
//       console.log('c');
//         // Pause the video
//         video.get(0).pause();
//         $('.play_video_sec').removeClass('v_played');
//         $('.play_video_sec #play_button i').removeClass('fa-pause-circle');
//         $('.play_video_sec #play_button i').addClass('fa-play-circle');
//         // Update the button text to 'Play'

//     }
// });

// Plugin isInViewport
!(function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ?
        n(require("jquery"), require("window")) :
        "function" == typeof define && define.amd ?
        define("isInViewport", ["jquery", "window"], n) :
        n(e.$, e.window);
})(this, function(e, n) {
    "use strict";

    function t(n) {
        var t = this;
        if (
            (1 === arguments.length && "function" == typeof n && (n = [n]), !(n instanceof Array))
        )
            throw new SyntaxError(
                "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
            );
        return (
            n.forEach(function(n) {
                "function" != typeof n
                    ?
                    (console.warn(
                            "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
                        ),
                        console.warn(
                            "isInViewport: Ignoring non-function values in array and moving on"
                        )) :
                    [].slice.call(t).forEach(function(t) {
                        return n.call(e(t));
                    });
            }),
            this
        );
    }

    function o(n) {
        var t = e("<div></div>").css({
            width: "100%"
        });
        n.append(t);
        var o = n.width() - t.width();
        return t.remove(), o;
    }

    function r(t, i) {
        var a = t.getBoundingClientRect(),
            u = a.top,
            c = a.bottom,
            f = a.left,
            l = a.right,
            d = e.extend({
                tolerance: 0,
                viewport: n
            }, i),
            s = !1,
            p = d.viewport.jquery ? d.viewport : e(d.viewport);
        p.length ||
            (console.warn(
                    "isInViewport: The viewport selector you have provided matches no element on page."
                ),
                console.warn("isInViewport: Defaulting to viewport as window"),
                (p = e(n)));
        var w = p.height(),
            h = p.width(),
            v = p[0].toString();
        if (p[0] !== n && "[object Window]" !== v && "[object DOMWindow]" !== v) {
            var g = p[0].getBoundingClientRect();
            (u -= g.top),
            (c -= g.top),
            (f -= g.left),
            (l -= g.left),
            (r.scrollBarWidth = r.scrollBarWidth || o(p)),
            (h -= r.scrollBarWidth);
        }
        return (
            (d.tolerance = ~~Math.round(parseFloat(d.tolerance))),
            d.tolerance < 0 && (d.tolerance = w + d.tolerance),
            l <= 0 || f >= h ?
            s :
            (s = d.tolerance ?
                u <= d.tolerance && c >= d.tolerance :
                c > 0 && u <= w)
        );
    }

    function i(n) {
        if (n) {
            var t = n.split(",");
            return (
                1 === t.length && isNaN(t[0]) && ((t[1] = t[0]), (t[0] = void 0)), {
                    tolerance: t[0] ? t[0].trim() : void 0,
                    viewport: t[1] ? e(t[1].trim()) : void 0,
                }
            );
        }
        return {};
    }
    (e = "default" in e ? e.default : e),
    (n = "default" in n ? n.default : n),
    /**
     * @author  Mudit Ameta
     * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
     */
    e.extend(e.expr[":"], {
            "in-viewport": e.expr.createPseudo ?
                e.expr.createPseudo(function(e) {
                    return function(n) {
                        return r(n, i(e));
                    };
                }) :
                function(e, n, t) {
                    return r(e, i(t[3]));
                },
        }),
        (e.fn.isInViewport = function(e) {
            return this.filter(function(n, t) {
                return r(t, e);
            });
        }),
        (e.fn.run = t);
});
//# isInViewport

$(document).ready(function() {
    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
        let compSlider = $(".comparison-slider");

        //let's loop through the sliders and initialise each of them
        compSlider.each(function() {
            let compSliderWidth = $(this).width() + "px";
            $(this).find(".resize img").css({
                width: compSliderWidth
            });
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
        });

        //if the user resizes the windows lets update our variables and resize our images
        $(window).on("resize", function() {
            let compSliderWidth = compSlider.width() + "px";
            compSlider.find(".resize img").css({
                width: compSliderWidth
            });
        });
    }
});

// This is where all the magic happens
// This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
function drags(dragElement, resizeElement, container) {
    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener("touchstart", function() {
        touched = true;
    });
    window.addEventListener("touchend", function() {
        touched = false;
    });

    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement
        .on("mousedown touchstart", function(e) {
            //add classes to the emelents - good for css animations if you need it to
            dragElement.addClass("draggable");
            resizeElement.addClass("resizable");
            //create vars
            let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let dragWidth = dragElement.outerWidth();
            let posX = dragElement.offset().left + dragWidth - startX;
            let containerOffset = container.offset().left;
            let containerWidth = container.outerWidth();
            let minLeft = containerOffset + 10;
            let maxLeft = containerOffset + containerWidth - dragWidth - 10;

            //add event listner on the divider emelent
            dragElement
                .parents()
                .on("mousemove touchmove", function(e) {
                    // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
                    if (touched === false) {
                        e.preventDefault();
                    }

                    let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
                    let leftValue = moveX + posX - dragWidth;

                    // stop the divider from going over the limits of the container
                    if (leftValue < minLeft) {
                        leftValue = minLeft;
                    } else if (leftValue > maxLeft) {
                        leftValue = maxLeft;
                    }

                    let widthValue =
                        ((leftValue + dragWidth / 2 - containerOffset) * 100) /
                        containerWidth +
                        "%";

                    $(".draggable")
                        .css("left", widthValue)
                        .on("mouseup touchend touchcancel", function() {
                            $(this).removeClass("draggable");
                            resizeElement.removeClass("resizable");
                        });

                    $(".resizable").css("width", widthValue);
                })
                .on("mouseup touchend touchcancel", function() {
                    dragElement.removeClass("draggable");
                    resizeElement.removeClass("resizable");
                });
        })
        .on("mouseup touchend touchcancel", function(e) {
            // stop clicping the image and move the slider
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
        });
}

// images lazyloader

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(
            entries,
            observer
        ) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazyload");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});

// header transparent when scrolling 
$(document).ready(function() {
    let $header = $("header");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $header.addClass("scrolled").removeClass("at-top");
            $headerText.css("color", "var(--theme-primary-color)"); // Change text color on scroll
        } else {
            $header.addClass("at-top").removeClass("scrolled");
            $headerText.css("color", "#FFD700"); // Change text color on scroll
        }
    });
});

//contact form validation and submit
$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission until validation is complete

        // Clear previous error messages
        $("#nameError, #emailError, #phoneError, #responseMessage").text("");

        // Get form values
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phoneInput = $("#phone");
        let phoneNumber = phoneInput.val().trim();
        let message = $("#message").val().trim();
        let valid = true;

        // here, the index maps to the error code returned from getValidationError - see readme
        const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

        // initialise plugin
        const iti = window.intlTelInput(input, {
            initialCountry: "in",
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
        });

        // Validation
        if (name === "") {
            $("#nameError").textContent = "Name is required.";
            valid = false;
        }

        if (email === "") {
            $("#emailError").textContent = "Email is required.";
            valid = false;
        } else if (!validateEmail(email)) {
            $("#emailError").textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (phoneNumber === "") {
            $("#phoneError").text("Phone No is required.");
            valid = false;
        } else {
            try {
                if (!iti.isValidNumber()) {
                    const errorCode = iti.getValidationError();
                    const msg = errorMap[errorCode] || "Invalid number";
                    console.log(msg)
                    $("#phoneError").text(msg);
                    valid = false;
                }
            } catch (error) {
                console.error("Error validating phone number:", error);
                $("#phoneError").text("Invalid phone number.");
                valid = false;
            }
        }

        if (message === "") {
            $("#messageError").text("Message is required.");
            valid = false;
        }

        if (valid) {
            // Submit the form via AJAX (Fetch API alternative in jQuery)
            submitForm(name, email, phoneNumber, message);
        }
    });

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function submitForm(name, email, phone, message) {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("message", message);

        $.ajax({
            url: "send_email.php",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    $("#responseMessage").text(data.message);
                    showSnackbar();
                    $("#contactForm")[0].reset(); // Reset form after success
                } else {
                    $("#responseMessage").text("Failed to send message: " + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#responseMessage").text("Error: " + errorThrown);
            }
        });
    }

    function showSnackbar() {
        let snackbar = $("#snackbar");
        snackbar.addClass("show");

        // Hide Snackbar after 2 seconds
        setTimeout(function() {
            snackbar.removeClass("show");
        }, 2000);
    }
});

//home banner course dropdown list
$(document).ready(function () {
    const $dropdown = $(".custom-dropdown");
    const $selected = $(".dropdown-selected");
    const $dropdownList = $(".dropdown-list");
    const $options = $(".dropdown-list li");

    // Toggle dropdown on click
    $dropdown.click(function (event) {
        event.stopPropagation(); // Prevent closing when clicking inside
        $dropdownList.toggle();
    });

    // Select option
    $options.click(function () {
        $selected.text($(this).text());
        $dropdownList.hide(); // Hide dropdown after selection
    });

    // Close dropdown when clicking outside
    $(document).click(function (event) {
        if (!$dropdown.is(event.target) && !$dropdown.has(event.target).length) {
            $dropdownList.hide();
        }
    });
});

function openDrawer() {
    document.getElementById("sideDrawer").classList.add("open");
}

function closeDrawer() {
    document.getElementById("sideDrawer").classList.remove("open");
}


