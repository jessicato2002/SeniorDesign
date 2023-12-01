const restrictMovementComponent = {
    // init is automatically called when A-Frame component is initialized or attached to an entity
    init() {
      // Initial position of the object
      this.originalPosition = this.el.object3D.position.clone()
      console.log('Hi')
      console.log(this.originalPosition)
      // Enable grabbing/dragging of the object
      this.el.setAttribute('grabbable', '')
      // Register the event listener for the 'grab' event
      this.el.addEventListener('grab', this.onGrab.bind(this))
    },
  
    onGrab() {
      console.log('ongrab triggered')
      const {el} = this
  
      // Store the starting position of the grab
      const startPosition = el.object3D.position.clone()
  
      // Register the event listener for the 'grab-moved' event
      el.addEventListener('grab-moved', (event) => {
        // Calculate the movement along the XY plane
        const deltaX = event.detail.position.x - startPosition.x
        const deltaY = event.detail.position.y - startPosition.y
  
        // Update the object's position only along the XY plane
        el.object3D.position.set(
          this.originalPosition.x + deltaX,
          this.originalPosition.y + deltaY,
          this.originalPosition.z
        )
      })
    },
  
  }
  
  export {restrictMovementComponent}
  
