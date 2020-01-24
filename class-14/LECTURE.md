# CSS Animations

Making our content move!!

## transitions
 - this just specifices that elements start at some state and should "move" to the next.

```html
<img class="circle" >
```

```css
.circle {
  color: white;
  border-radius: 30px;
  /* transition-property: border-radius; */
  transition: 1s;
}

.circle:hover {
  color: black;
  border-radius: 0px;
}
```

## transforms

- specifying specific effects that a element should have
- transform: movement
- scale: make things larger or smaller
- rotate: rotating an element by degress
- skew: moves discrete parts of an element.

```html
<img class="circle move-left" >
```

```css
.circle {
  color: white;
  border-radius: 30px;
}
.circle:hover {
  transform: translateX(10px);
}

.move-left {
  transform: translateX(10px);
}

.skew {
  transform: skew(30deg, 100deg);
}
```

## @keyframes

- defines a set of CSS properties to change to at specific times.

```css

.shakeElement {
  animation-name: Shake;
  animation-iteration-count: infinite; // how many times does the animation occur
  animation-duration: 1s; // how long does it take to complete all the keyframes.
}

@keyframes Shake {
  0% {
    left: 0;
  }
  50% {
    left: 50px;
  }
  100% {
    left: 0;
  }
}

```