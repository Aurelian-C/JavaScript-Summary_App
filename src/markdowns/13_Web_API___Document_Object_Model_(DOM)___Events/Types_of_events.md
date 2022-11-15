Some events, such as `click`, are available on nearly any element. Others are more specific and only useful in certain situations: for example, the [`play`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event) event is only available on some elements, such as [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

## DOM Event Objects

When an event occurs in HTML, the event belongs to a certain event object, like a mouse click event belongs to the [`MouseEvent`](https://www.w3schools.com/jsref/obj_mouseevent.asp) object. 

All event objects are based on the `Event` Object, and inherit all of their properties and methods:

| Event Object                                           | Description                     |
| :----------------------------------------------------- | :------------------------------ |
| [Event](https://www.w3schools.com/jsref/obj_event.asp) | The parent of all event objects |

These are the most common event objects:

| Event Object                                                 | Description                                    |
| :----------------------------------------------------------- | :--------------------------------------------- |
| [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) | For CSS animations                             |
| [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) | For modification of the clipboard              |
| [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) | For drag and drop interaction                  |
| [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) | For focus-related events                       |
| [HashChangeEvent](https://www.w3schools.com/jsref/obj_hashchangeevent.asp) | For changes in the anchor part of the URL      |
| [InputEvent](https://www.w3schools.com/jsref/obj_inputevent.asp) | For user input                                 |
| [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) | For keyboard interaction                       |
| [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) | For mouse interaction                          |
| [PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp) | For navigating to, and away from, web pages    |
| [PopStateEvent](https://www.w3schools.com/jsref/obj_popstateevent.asp) | For changes in the history entry               |
| [ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp) | For the progress of loading external resources |
| [StorageEvent](https://www.w3schools.com/jsref/obj_storageevent.asp) | For changes in the window's storage area.      |
| [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) | For touch interaction                          |
| [TransitionEvent](https://www.w3schools.com/jsref/obj_transitionevent.asp) | For CSS transitions                            |
| [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp)   | For user interface interaction                 |
| [WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp) | For mousewheel interaction                     |

## References

1. [Event reference - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
1. [HTML DOM Event Objects - w3schools](https://www.w3schools.com/jsref/obj_events.asp)