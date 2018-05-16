"use strict";var rt,serial,KeyboardKey,pxsim,__extends=this&&this.__extends||function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();!function(e){e.getUserData=function(e,t){return e.userData[t]},e.setUserData=function(e,t,n){e.userData[t]=n};var t=function(){function e(){this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed||(this._onDispose(),this._isDisposed=!0)},e}(),n=function(n){function e(e){var t=n.call(this)||this;return t._reference=e,t}return __extends(e,n),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},enumerable:!0,configurable:!0}),e}(e.DisposableObject=t);e.ProxyObject=n;var r=function(){function t(e){this._objectcache=new Map,this._ctor=e,t._factories.push(this)}return t.forgetAllInstances=function(){t._factories.forEach(function(e){return e.forgetAllInstances()})},t.prototype.instantiate=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new((e=this._ctor).bind.apply(e,[void 0].concat(t)))},t.prototype.instantiateWithCache=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=objectHash(e||{},{algorithm:"md5",encoding:"hex",respectType:!1}),r=this._objectcache.get(n);return r||this._objectcache.set(n,r=this.instantiate.apply(this,e)),r},t.prototype.forgetAllInstances=function(){this._objectcache.clear()},t._factories=new Array,t}();e.ObjectFactory=r}(rt||(rt={})),function(t){function e(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._rigidbody=null,n._isDisposed=!1,void 0!==n.castShadow&&(n.castShadow=!0),void 0!==n.receiveShadow&&(n.receiveShadow=!0),n}return __extends(e,r),Object.defineProperty(e.prototype,"position_",{get:function(){return this.position},set:function(e){this.position.copy(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rotation_",{get:function(){var e=this.rotation.toVector3();return new t.VectorConstructor(THREE.Math.radToDeg(e.x),THREE.Math.radToDeg(e.y),THREE.Math.radToDeg(e.z))},set:function(e){this.rotation.setFromVector3(new t.VectorConstructor(THREE.Math.degToRad(e.x),THREE.Math.degToRad(e.y),THREE.Math.degToRad(e.z)))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"quaternion_",{get:function(){return this.quaternion},set:function(e){this.quaternion.copy(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scale_",{get:function(){return this.scale},set:function(e){this.scale.copy(e)},enumerable:!0,configurable:!0}),e.prototype.setRotationFromAxisAngle=function(e,t){e&&this.setRotationFromAxisAngle(e,THREE.Math.degToRad(t))},e.prototype.setPhysicsEnabled=function(e){this._rigidbody&&(this._rigidbody.isKinematic=!e)},e.prototype.lookAtPosition=function(e){e&&this.lookAt(e)},e.prototype.animate=function(t){this._rigidbody&&this._rigidbody.syncMotionStateToObject3d(),this.children.forEach(function(e){return e.animate(t)})},e.prototype.onAdded=function(t){this._rigidbody&&this._rigidbody.addRigidBody(t.physicsWorld),this.children.forEach(function(e){return e.onAdded(t)})},e.prototype.onRemoved=function(t){this.children.forEach(function(e){return e.onRemoved(t)}),this._rigidbody&&this._rigidbody.removeRigidBody(t.physicsWorld)},e.prototype.copy=function(e,t){throw r.prototype.copy.call(this,e,t),Error()},e.prototype.dispose=function(){this._isDisposed||(this._onDispose(),this._isDisposed=!0)},e.prototype._onDispose=function(){this.children.forEach(function(e){return e.dispose()}),t.Helper.safeObjectDispose(this._rigidbody)},e}(e)}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((t.Object3dMixin=e)(THREE.Object3D));t.Object3d=n}(pxsim||(pxsim={})),function(e){e.OrbitControlsConstructor=THREE.OrbitControls,e.TrackballControlsConstructor=THREE.TrackballControls}(pxsim||(pxsim={})),function(n){function e(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._controls=null,n}return __extends(e,r),e.prototype.attachController=function(e){switch(this._controls&&(this._controls.dispose(),this._controls=null),e){case 1:break;case 2:this._controls=new n.OrbitControlsConstructor(this);break;case 3:this._controls=new n.TrackballControlsConstructor(this)}this._controls&&this._controls.target.set(0,0,0)},e.prototype.setSize=function(e,t){this._controls&&this._controls instanceof n.TrackballControlsConstructor&&this._controls.handleResize()},e.prototype.update=function(){this._controls&&this._controls.update()},e}(e)}var t=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((n.CameraMixin=e)(n.Object3dMixin(THREE.Camera)));n.Camera=t;var r=function(o){function e(e,t,n){var r=o.call(this,e||60,1,t||.2,n||2e3)||this;return r._oldaspect=0,r}return __extends(e,o),e.prototype.setSize=function(e,t){o.prototype.setSize.call(this,e,t);var n=this.aspect=e/t;this._oldaspect!==n&&(this._oldaspect=n,this.updateProjectionMatrix())},e}(e(n.Object3dMixin(THREE.PerspectiveCamera)));n.PerspectiveCamera=r}(pxsim||(pxsim={})),function(e){(e.camera||(e.camera={})).perspectiveCamera=function(){return new e.PerspectiveCamera}}(pxsim||(pxsim={})),(pxsim||(pxsim={})).ColorConstructor=THREE.Color,function(r){var e;(e=r.color||(r.color={})).colorToString=function(e){return"("+255*e.r+", "+255*e.g+", "+255*e.b+")"},e.standardColor=function(e){return new r.ColorConstructor(e)},e.randomColor=function(){return new r.ColorConstructor(Math.random()*(1<<24))},e.colorFromRgb=function(e,t,n){return(new r.ColorConstructor).setRGB(e/255,t/255,n/255)},e.colorFromHsv=function(e,t,n){return(new r.ColorConstructor).setHSL(e/255,t/255,n/255)},e.colorWheel=function(e){return new r.ColorConstructor(e)},e.colorPicker=function(e){return new r.ColorConstructor(e)}}(pxsim||(pxsim={})),function(e){function n(e){var t;t=e+"\r\n",console.log(t),pxsim.runtime.board.writeSerial(t)}e.writeLine=n,e.writeValue=function(e,t){n((e?e+":":"")+t)}}(serial||(serial={})),function(e){var t;(t=e.console||(e.console={})).log=function(e){serial.writeLine(e)},t.logValue=function(e,t){serial.writeValue(e,t)}}(pxsim||(pxsim={})),function(e){e[e.Delete=8]="Delete",e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Spacebar=32]="Spacebar",e[e.F1=112]="F1",e[e.F2=113]="F2",e[e.F3=114]="F3",e[e.F4=115]="F4",e[e.F5=116]="F5",e[e.F6=117]="F6",e[e.F7=118]="F7",e[e.F8=119]="F8",e[e.F9=120]="F9",e[e.F10=121]="F10",e[e.F11=122]="F11",e[e.F12=123]="F12"}(KeyboardKey||(KeyboardKey={})),function(r){var e;(e=r.input||(r.input={})).onKeyEvent=function(e,t,n){r.singletonWorldBoard().events.listen(r.keyboardScopeIdFromKey(e),t,n)},e.onMouseEnter=function(e){r.singletonWorldBoard().events.listen(200,0,e)},e.onMouseMove=function(e){r.singletonWorldBoard().events.listen(200,1,e)},e.onMouseLeave=function(e){r.singletonWorldBoard().events.listen(200,2,e)},e.onMouseButtonEvent=function(e,t,n){r.singletonWorldBoard().events.listen(r.mouseScopeIdFromButton(e),t,n)}}(pxsim||(pxsim={})),function(e){function t(e){return(t=function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return void 0!==n.shadow&&(void 0!==n.shadow.camera&&n.shadow.camera instanceof THREE.OrthographicCamera&&(n.shadow.camera.left=-o.distFrustum,n.shadow.camera.right=o.distFrustum,n.shadow.camera.top=o.distFrustum,n.shadow.camera.bottom=-o.distFrustum),n.shadow.bias=1e-4,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048),n}return __extends(e,r),e}(e)).distFrustum=100,t;var t}var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((e.LightMixin=t)(e.Object3dMixin(THREE.Light)));e.Light=o;var n=function(n){function e(e,t){return n.call(this,e||4210752,t||1)||this}return __extends(e,n),e}(t(e.Object3dMixin(THREE.AmbientLight)));e.AmbientLight=n;var r=function(n){function e(e,t){return n.call(this,e||16777215,t||1)||this}return __extends(e,n),e}(t(e.Object3dMixin(THREE.DirectionalLight)));e.DirectionalLight=r;var i=function(r){function e(e,t,n){return r.call(this,e||3310847,t||16763007,n||.6)||this}return __extends(e,r),e}(t(e.Object3dMixin(THREE.HemisphereLight)));e.HemisphereLight=i;var s=function(o){function e(e,t,n,r){return o.call(this,e||16777215,t||1,n||0,r||2)||this}return __extends(e,o),e}(t(e.Object3dMixin(THREE.PointLight)));e.PointLight=s;var a=function(s){function e(e,t,n,r,o,i){return s.call(this,e||16777215,t||1,n||0,r||Math.PI/3,o||0,i||2)||this}return __extends(e,s),e}(t(e.Object3dMixin(THREE.SpotLight)));e.SpotLight=a}(pxsim||(pxsim={})),function(r){var e;(e=r.light||(r.light={})).ambientLight=function(e,t){return new r.DirectionalLight(e,t)},e.directionalLight=function(e,t){return new r.DirectionalLight(e,t)},e.hemisphereLight=function(e,t,n){return new r.HemisphereLight(e,t,n)},e.pointLight=function(e,t){return new r.PointLight(e,t)},e.spotLight=function(e,t){return new r.SpotLight(e,t)}}(pxsim||(pxsim={})),function(t){var e;(e=t.loops||(t.loops={})).forever=function(e){t.thread.forever(e)},e.pauseAsync=function(e){return Promise.delay(e)}}(pxsim||(pxsim={})),function(e){function t(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._density=1,n}return __extends(e,r),Object.defineProperty(e.prototype,"density",{get:function(){return this._density},set:function(e){this._density=e},enumerable:!0,configurable:!0}),e.prototype.copy=function(e){return r.prototype.copy.call(this,e),this.density=e.density,this},e}(e)}var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((e.MaterialMixin=t)(THREE.MeshStandardMaterial));e.Material=n}(pxsim||(pxsim={})),function(t){(t.material||(t.material={})).materialOfColor=function(e){return new t.Material({color:(e?e.getHex():void 0)||16777215,emissive:0,metalness:0,roughness:.5})}}(pxsim||(pxsim={})),function(e){e.VectorConstructor=THREE.Vector3,e.QuaternionConstructor=THREE.Quaternion,e.EulerConstructor=THREE.Euler,e.SphericalConstructor=THREE.Spherical}(pxsim||(pxsim={})),function(e){var t;(t=e.math||(e.math={})).degreesInRadians=function(e){return THREE.Math.degToRad(e)},t.radiansInDegrees=function(e){return THREE.Math.radToDeg(e)}}(pxsim||(pxsim={})),function(i){!function(e){function t(e,t,n){return new i.VectorConstructor(e,t,n)}function o(){return t(0,0,0)}function n(e,t,n,r){return new i.QuaternionConstructor(e,t,n,r)}e.vectorToString=function(e){return"("+e.x+", "+e.y+", "+e.z+")"},e.quaternionToString=function(e){return"("+e.x+", "+e.y+", "+e.z+", "+e.w+")"},e.vector=t,e.zeroVector=o,e.unitVector=function(){return t(1,1,1)},e.vectorOp=function(e,t,n){var r=o();switch(t){case 1:return r.addVectors(e,n);case 2:return r.subVectors(e,n);case 3:return r.multiplyVectors(e,n)}throw new Error},e.vectorScalarOp=function(e,t,n){var r=e;switch(t){case 1:return r.addScalar(n);case 2:return r.subScalar(n);case 3:return r.multiplyScalar(n);case 4:return r.divideScalar(n)}},e.quaternion=n,e.zeroQuaternion=function(){return n(0,0,0,0)}}(i.math3d||(i.math3d={}))}(pxsim||(pxsim={})),function(o){var e=function(r){function e(e,t){var n=r.call(this,e,t)||this;return n._rigidbody=new o.RigidBody(n,e,e.volume*t.density),n}return __extends(e,r),e}(o.Object3dMixin(THREE.Mesh));o.Mesh3d=e}(pxsim||(pxsim={})),function(n){var e;(e=n.mesh||(n.mesh={})).fromShapeAndMaterial=function(e,t){return e&&t?new n.Mesh3d(e,t):null},e.materialOf=function(e){if(!(e&&e instanceof n.Mesh3d))return null;var t=e.material;return Array.isArray(t)?0<t.length?t[0]:null:t}}(pxsim||(pxsim={})),(pxsim||(pxsim={})).RaycasterConstructor=THREE.Raycaster,function(t){var e=function(r){function e(){var e=r.call(this)||this;return e._physicsworld=new t.PhysicsWorld,e._camera=null,e._ambientlight=new t.AmbientLight,e._raycaster=new t.RaycasterConstructor,e.background=new t.ColorConstructor(8900331),e._ambientlight.color.setScalar(.5),e.addAt(e._ambientlight,t.math3d.zeroVector()),e}return __extends(e,r),Object.defineProperty(e.prototype,"physicsWorld",{get:function(){return this._physicsworld},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"camera",{get:function(){return this._camera},set:function(e){this._camera=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this.background},set:function(e){this.background=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ambientColor",{get:function(){return this._ambientlight.color},set:function(e){this._ambientlight.color=e},enumerable:!0,configurable:!0}),e.prototype.addAt=function(e,t){e&&(e.position.copy(t),this.add(e))},e.prototype.add=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e&&(r.prototype.add.apply(this,e),e.forEach(function(e){return e.onAdded(t)}))},e.prototype.remove=function(e){e&&(e.onRemoved(this),r.prototype.remove.call(this,e))},e.prototype.animate=function(e){this._physicsworld.animate(e),this._camera&&this._camera.update(),r.prototype.animate.call(this,e),t.singletonWorldBoard().events.queue(1,0,e)},e.prototype.intersectedObjects=function(e,t){if(!this._camera)return null;this._raycaster.setFromCamera({x:e,y:t},this._camera);var n=this._raycaster.intersectObjects(this.children);return n?n.map(function(e){return e.object}):null},e.prototype.setPhysicsEnabled=function(e){},e.prototype.copy=function(e,t){throw r.prototype.copy.call(this,e,t),Error()},e.prototype._onDispose=function(){r.prototype._onDispose.call(this),this._physicsworld.dispose()},e}(t.Object3dMixin(THREE.Scene));t.Scene3d=e}(pxsim||(pxsim={})),function(o){var e;(e=o.scene||(o.scene={})).randomPositionOnPlane=function(e){return new o.VectorConstructor((Math.random()-.5)*e,0,(Math.random()-.5)*e)},e.randomPositionInSphere=function(e){var t=new o.SphericalConstructor(Math.random()*e*.5,Math.random()*Math.PI*2,Math.random()*Math.PI*2);return(new o.VectorConstructor).setFromSpherical(t)},e.randomPositionInCube=function(e){return new o.VectorConstructor((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e)},e.intersectedObjectAt=function(e,t){var n=o.world.scene(),r=n?n.intersectedObjects(e,t):null;return r&&0<r.length?r[0]:null},e.onAnimate=function(e){o.singletonWorldBoard().events.listen(1,0,e)}}(pxsim||(pxsim={})),function(o){function e(e){return(t=function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=r.apply(this,e)||this;return n._volumeFn=null,n._btCollisionShapeFn=null,n}return __extends(e,r),Object.defineProperty(e.prototype,"volume",{get:function(){return this._volumeFn?this._volumeFn():0},enumerable:!0,configurable:!0}),e.prototype.btCollisionShape=function(){return this._btCollisionShapeFn()},e.prototype.copy=function(e){throw r.prototype.copy.call(this,e),new Error},e.prototype._getBounds=function(){return this._getBoundingBox().getSize(new THREE.Vector3)},e.prototype._getBoundingBox=function(){return this.computeBoundingBox(),this.boundingBox},e.prototype._getBoundingSphere=function(){return this.computeBoundingSphere(),this.boundingSphere},e.prototype._btCollisionShapeFromHalfExtents=function(e){var t=o.Helper.btVector3FromThree(this._getBounds().divideScalar(2)),n=e(t);return n.setMargin(o.collisionMargin),o.Helper.safeAmmoObjectDestroy(t),n},e.prototype._setVolumeAndCollisionShapeFromGeometry=function(e){var t=(new o.QuickHull3d).calculateFromShape3d(e||this,{includeAreaAndVolume:!0});this._volumeFn=function(){return t.volume},this._btCollisionShapeFn=function(){return o.btCollisionShapeFromQuickHull3dResult(t)}},e}(e))._radialSegments=32,t._radialSegmentsHull=12,t._tubulaSegments=24,t._tubulaSegmentsHull=8,t._patchSegments=10,t._patchSegmentsHull=2,t;var t}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}((o.ShapeMixin=e)(THREE.BufferGeometry));o.Shape3d=i;var t=function(r){function e(e,t){var n=r.call(this,e,t)||this;return n.rotateX(-Math.PI/2),n._btCollisionShapeFn=function(){return n._btCollisionShapeFromHalfExtents(function(e){return new Ammo.btBoxShape(e)})},n}return __extends(e,r),e}(e(THREE.PlaneBufferGeometry));o.PlaneShape3d=t;var n=function(o){function e(e,t,n){var r=o.call(this,e,t,n)||this;return r._volumeFn=function(){return e*t*n},r._btCollisionShapeFn=function(){return r._btCollisionShapeFromHalfExtents(function(e){return new Ammo.btBoxShape(e)})},r}return __extends(e,o),e}(e(THREE.BoxBufferGeometry));o.BoxShape3d=n;var r=function(r){function e(e,t){var n=r.call(this,e,e,t,i._radialSegments,1,!1)||this;return n._volumeFn=function(){return Math.PI*Math.pow(e,2)*t},n._btCollisionShapeFn=function(){return n._btCollisionShapeFromHalfExtents(function(e){return new Ammo.btCylinderShape(e)})},n}return __extends(e,r),e}(e(THREE.CylinderBufferGeometry));o.CylinderShape3d=r;var s=function(n){function e(e){var t=n.call(this,e,i._radialSegments,i._radialSegments)||this;return t._volumeFn=function(){return 4/3*Math.PI*Math.pow(e,3)},t._btCollisionShapeFn=function(){return new Ammo.btSphereShape(e)},t}return __extends(e,n),e}(e(THREE.SphereBufferGeometry));o.SphereShape3d=s;var a=function(r){function e(e,t){var n=r.call(this,e,t,i._radialSegments)||this;return n._volumeFn=function(){return Math.PI*Math.pow(e,2)*t/3},n._btCollisionShapeFn=function(){return new Ammo.btConeShape(e,t)},n}return __extends(e,r),e}(e(THREE.ConeBufferGeometry));function u(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(e)}o.ConeShape3d=a;var c=function(n){function e(e){var t=n.call(this,e)||this;return t._setVolumeAndCollisionShapeFromGeometry(),t}return __extends(e,n),e}((o.PolyhedronMixin=u)(e(THREE.TetrahedronBufferGeometry)));o.TetrahedronShape3d=c;var l=function(n){function e(e){var t=n.call(this,e)||this;return t._setVolumeAndCollisionShapeFromGeometry(),t}return __extends(e,n),e}(u(e(THREE.OctahedronBufferGeometry)));o.OctahedronShape3d=l;var p=function(n){function e(e){var t=n.call(this,e)||this;return t._setVolumeAndCollisionShapeFromGeometry(),t}return __extends(e,n),e}(u(e(THREE.IcosahedronBufferGeometry)));o.IcosahedronShape3d=p;var d=function(n){function e(e){var t=n.call(this,e)||this;return t._setVolumeAndCollisionShapeFromGeometry(),t}return __extends(e,n),e}(u(e(THREE.DodecahedronBufferGeometry)));o.DodecahedronShape3d=d;var h=function(r){function e(e,t){var n=r.call(this,e,t,i._radialSegments,i._tubulaSegments)||this;return n._setVolumeAndCollisionShapeFromGeometry(new THREE.TorusBufferGeometry(e,t,i._radialSegmentsHull,i._tubulaSegmentsHull)),n}return __extends(e,r),e}(e(THREE.TorusBufferGeometry));o.TorusShape3d=h;var f=function(r){function e(e,t){var n=r.call(this,e,t,i._radialSegments,2*i._tubulaSegments)||this;return n._setVolumeAndCollisionShapeFromGeometry(new THREE.TorusKnotBufferGeometry(e,t,i._radialSegmentsHull,2*i._tubulaSegmentsHull)),n}return __extends(e,r),e}(e(THREE.TorusKnotBufferGeometry));o.TorusKnotShape3d=f;var m=function(n){function e(e){var t=n.call(this,e,i._patchSegments)||this;return t._setVolumeAndCollisionShapeFromGeometry(new THREEX.TeapotBufferGeometry(e,i._patchSegmentsHull)),t}return __extends(e,n),e}(e(THREEX.TeapotBufferGeometry));o.TeapotShape3d=m}(pxsim||(pxsim={})),function(r){var e;(e=r.shape||(r.shape={})).planeShape=function(e,t){return e=e||100,t=t||100,new r.PlaneShape3d(e,t)},e.boxShape=function(e,t,n){return e=e||1,t=t||1,n=n||1,new r.BoxShape3d(e,t,n)},e.cylinderShape=function(e,t){return e=e||.5,t=t||1,new r.CylinderShape3d(e,t)},e.sphereShape=function(e){return e=e||.5,new r.SphereShape3d(e)},e.coneShape=function(e,t){return e=e||.5,t=t||1,new r.ConeShape3d(e,t)},e.polyhedronShape=function(e,t){switch(t=t||.5,e){case 4:return new r.TetrahedronShape3d(t);case 8:return new r.OctahedronShape3d(t);case 20:return new r.IcosahedronShape3d(t);case 30:return new r.DodecahedronShape3d(t)}},e.torusShape=function(e,t,n){switch(t=t||.5,n=n||.2,e){case 1:return new r.TorusShape3d(t,n);case 2:return new r.TorusKnotShape3d(t,n)}},e.teapotShape=function(e){return e=e||1,new r.TeapotShape3d(e)}}(pxsim||(pxsim={})),function(s){var e=function(n){function e(e){var t=n.call(this)||this;return t._scene3d=new s.Scene3d,t._renderer=new s.Renderer(e),t._renderer.scene=t._scene3d,t._listenerhelper=new s.SimpleEventListenerHelper(t._renderer.container),t._listenerhelper.addEventListener("blur",function(e){return t._onElementFocused(e.target,!1)}),t._listenerhelper.addEventListener("focus",function(e){return t._onElementFocused(e.target,!0)}),t._listenerhelper.addEventListener("mouseenter",function(e){return t._onElementEvent(200,0,e)}),t._listenerhelper.addEventListener("mousemove",function(e){return t._onElementMouseEvent(200,1,e)}),t._listenerhelper.addEventListener("mouseleave",function(e){return t._onElementEvent(200,2,e)}),t._listenerhelper.addEventListener("mousedown",function(e){return t._onElementMouseEvent(s.mouseScopeIdFromButton(e.button),0,e)}),t._listenerhelper.addEventListener("click",function(e){return t._onElementMouseEvent(s.mouseScopeIdFromButton(e.button),1,e)}),t._listenerhelper.addEventListener("dblclick",function(e){return t._onElementMouseEvent(s.mouseScopeIdFromButton(e.button),2,e)}),t._listenerhelper.addEventListener("mouseup",function(e){return t._onElementMouseEvent(s.mouseScopeIdFromButton(e.button),3,e)}),t._listenerhelper.addEventListener("keydown",function(e){return t._onElementEvent(s.keyboardScopeIdFromKey(e.key),0,e)}),t._listenerhelper.addEventListener("keypress",function(e){return t._onElementEvent(s.keyboardScopeIdFromKey(e.key),1,e)}),t._listenerhelper.addEventListener("keyup",function(e){return t._onElementEvent(s.keyboardScopeIdFromKey(e.key),2,e)}),t._onElementFocused(t._renderer.container,!1),t}return __extends(e,n),Object.defineProperty(e.prototype,"scene",{get:function(){return this._scene3d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderer",{get:function(){return this._renderer},enumerable:!0,configurable:!0}),e.prototype._onDispose=function(){this._listenerhelper.removeAllEventListeners(),s.Helper.safeObjectDispose(this._renderer),s.Helper.safeObjectDispose(this._scene3d)},e.prototype._onElementEvent=function(e,t,n,r){s.singletonWorldBoard().events.queue(e,t,r)},e.prototype._onElementFocused=function(e,t){e.classList.toggle("blur",!t),e.classList.toggle("focus",t)},e.prototype._onElementMouseEvent=function(e,t,n){if(e){201===e&&0===t&&this._renderer.container.focus();var r=this._renderer.canvas.getBoundingClientRect(),o=(n.clientX-r.left)/r.width*2-1,i=-(n.clientY-r.top)/r.height*2+1;this._onElementEvent(e,t,n,new s.EventCoordValue(o,i))}},e}(rt.DisposableObject);s.World3d=e}(pxsim||(pxsim={})),function(t){var e;(e=t.world||(t.world={})).world=function(){return t.singletonWorldBoard().world},e.scene=function(){var e=t.world.world();return e?e.scene:null}}(pxsim||(pxsim={})),function(n){var e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._world3d=null,e._events=null,e}return __extends(e,t),Object.defineProperty(e,"singleton",{get:function(){return this._board},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"world",{get:function(){return this._world3d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"events",{get:function(){return this._events},enumerable:!0,configurable:!0}),e.prototype.initAsync=function(e){return this.init(),Promise.resolve()},e.prototype.init=function(){this.postkill(),this._world3d=new n.World3d,this._events=new n.WorldEventBus(n.runtime)},e.prototype.kill=function(){this._world3d&&(this._world3d.renderer.pause=!0)},e.prototype.postkill=function(){rt.ObjectFactory.forgetAllInstances(),n.Helper.safeObjectDispose(this._world3d),this._world3d=null},e.prototype.receiveMessage=function(e){},e.prototype.updateView=function(){},e._board=new e,e}(n.BaseBoard);function t(){return e.singleton}n.WorldBoard=e,n.initCurrentRuntime=function(e){return t().postkill(),n.runtime.board=t()},n.singletonWorldBoard=t}(pxsim||(pxsim={})),function(e){e.keyboardScopeIdFromKey=function(e){var t;return"string"==typeof e?(" "===e&&(e="Spacebar"),t=KeyboardKey[e]):t=e,101+t},e.mouseScopeIdFromButton=function(e){return 201+e};var t=function(){},n=function(r){function e(e,t){var n=r.call(this)||this;return n.x=e,n.y=t,n}return __extends(e,r),e.prototype.toActionArgs=function(){return[this.x,this.y]},e}(e.EventValue=t);e.EventCoordValue=n;var r=function(n){function e(e){var t=n.call(this)||this;return t.key=e,t}return __extends(e,n),e.prototype.toActionArgs=function(){return[this.key]},e}(t);e.EventKeyValue=r;var o=function(t){function e(e){return t.call(this,e,function(e){return e?"object"==typeof e?e.toActionArgs():[e]:[]})||this}return __extends(e,t),e}(e.EventBusGeneric);e.WorldEventBus=o}(pxsim||(pxsim={})),function(e){var t=function(){function e(){}return e.btVector3FromThree=function(e,t){return void 0===t&&(t=new Ammo.btVector3),t.setValue(e.x,e.y,e.z),t},e.btQuaternionFromThree=function(e,t){return void 0===t&&(t=new Ammo.btQuaternion),t.setValue(e.x,e.y,e.z,e.w),t},e.arrayFromBufferAttribute=function(e,t){for(var n=new Array(e.count),r=0;r<e.count;r++)n[r]=new t,n[r].fromBufferAttribute(e,r);return n},e.applyFn=function(e,t){return Array.isArray(e)?e.map(t):t(e)},e.safeObjectDispose=function(e){e&&e.dispose()},e.safeAmmoObjectDestroy=function(e){e&&Ammo.destroy(e)},e}();e.Helper=t;var n=function(){function e(e){this.target=e,this._listeners=new Map}return e.prototype.addEventListener=function(e,t){this.target.addEventListener(e,t),this._listeners.set(e,t)},e.prototype.removeEventListener=function(e){var t=this._listeners.get(e);t&&(this.target.removeEventListener(e,t),this._listeners.delete(e))},e.prototype.removeAllEventListeners=function(){var n=this;this._listeners.forEach(function(e,t){n.target.removeEventListener(t,e)}),this._listeners.clear()},e}();e.SimpleEventListenerHelper=n}(pxsim||(pxsim={})),function(r){r.collisionMargin=.05,r.btCollisionShapeFromQuickHull3dResult=function(t){var n=new Ammo.btConvexHullShape;return n.setMargin(r.collisionMargin),t.hullindexes.forEach(function(e){return n.addPoint(r.Helper.btVector3FromThree(t.vertices[e]))}),n};var n=function(){this.area=0,this.volume=0,this.hullindexes=[],this.vertices=[],this.normals=[]};r.QuickHull3dResult=n;var e=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.calculateFromShape3d=function(e,t){var n;if(e instanceof THREE.Geometry)n=e.vertices;else{if(!(e instanceof THREE.BufferGeometry))throw new Error;n=r.Helper.arrayFromBufferAttribute(e.getAttribute("position"),THREE.Vector3)}return this.setFromPoints(n)._getResult(t)},t.prototype._getResult=function(i){var s=new n,a=new THREE.Vector3;return this.faces.forEach(function(e){var t=e.edge;if(i&&i.includeAreaAndVolume&&(s.area+=e.area,s.volume+=Math.abs(e.distanceToPoint(a))*e.area),!i||!i.excludeGeometry)do{var n=t.head(),r=n.point,o=!!n.userData;n.userData=!0,o||s.hullindexes.push(s.vertices.length),s.vertices.push(r),s.normals.push(e.normal),t=t.next}while(t!==e.edge)}),s.volume/=3,s},t}(THREEX.QuickHull);r.QuickHull3d=e}(pxsim||(pxsim={})),function(r){var e=function(t){function n(){var e=t.call(this)||this;return e._btconfig=new Ammo.btDefaultCollisionConfiguration,e._btdispatcher=new Ammo.btCollisionDispatcher(e._btconfig),e._btbroadphase=new Ammo.btDbvtBroadphase,e._btconstraintsolver=new Ammo.btSequentialImpulseConstraintSolver,e._btworld=new Ammo.btDiscreteDynamicsWorld(e._btdispatcher,e._btbroadphase,e._btconstraintsolver,e._btconfig),e._btworld.getSolverInfo().m_numIterations=n._numIterationsSolver,e}return __extends(n,t),Object.defineProperty(n.prototype,"btWorld",{get:function(){return this._btworld},enumerable:!0,configurable:!0}),n.prototype.getGravity=function(){return this._btworld.getGravity().y()},n.prototype.setGravity=function(e){var t=new Ammo.btVector3(0,e,0);this._btworld.setGravity(t),r.Helper.safeAmmoObjectDestroy(t)},n.prototype.animate=function(e){this._btworld.stepSimulation(e,n._maxStepSimulation,n._fixedTimeStep)},n.prototype._onDispose=function(){r.Helper.safeAmmoObjectDestroy(this._btworld),r.Helper.safeAmmoObjectDestroy(this._btconstraintsolver),r.Helper.safeAmmoObjectDestroy(this._btbroadphase),r.Helper.safeAmmoObjectDestroy(this._btdispatcher),r.Helper.safeAmmoObjectDestroy(this._btconfig)},n._numIterationsSolver=4,n._maxStepSimulation=3,n._fixedTimeStep=1/60,n}(rt.DisposableObject);r.PhysicsWorld=e}(pxsim||(pxsim={})),(pxsim||(pxsim={})).ClockConstructor=THREE.Clock,function(o){var e=function(n){function r(e){void 0===e&&(e="maincanvas");var t=n.call(this,r._instantiateReference(e))||this;if(t._scene3d=null,t._stats=new Stats,t._clock=new o.ClockConstructor,t._paused=!1,t._callbackRequestId=0,t._onWindowResize=function(){t._container&&(t.reference.setPixelRatio(window.devicePixelRatio),t.reference.setSize(t._container.clientWidth,t._container.clientHeight))},t._id=e,t._container=document.getElementById(e.toString()),!t._container)throw new Error("Canvas container element "+e+" not found.");return THREEX.Detector.webgl?(t._container.innerHTML="",t._container.appendChild(t.reference.domElement),t._container.appendChild(t._stats.dom),window.addEventListener("resize",t._onWindowResize),t._onWindowResize(),t.runRenderLoop()):THREEX.Detector.addGetWebGLMessage({parent:t._container}),t}return __extends(r,n),r._instantiateReference=function(e){var t=r._renderers.get(e);return t||(r._renderers.set(e,t=new THREE.WebGLRenderer({antialias:!0})),t.shadowMap.enabled=!0,t.shadowMap.type=THREE.PCFSoftShadowMap,t.setClearColor(13882323)),t},Object.defineProperty(r.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"container",{get:function(){return this._container},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvas",{get:function(){return this.reference.domElement},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scene",{get:function(){return this._scene3d},set:function(e){this._scene3d=e},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isPaused",{get:function(){return this._paused},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"pause",{set:function(e){this._paused=e},enumerable:!0,configurable:!0}),r.prototype.runRenderLoop=function(){var i=this;this._callbackRequestId=requestAnimationFrame(function(e){if(!i._paused){i._stats.begin();var t=!1,n=i._scene3d;if(n){n.animate(i._clock.getDelta());var r=n.camera;if(r){var o=i.reference.getSize();r.setSize(o.width,o.height),i.reference.render(n,r),t=!0}}t||i.reference.clear(),i._stats.end()}i.runRenderLoop()})},r.prototype.stopRenderLoop=function(){0!==this._callbackRequestId&&(cancelAnimationFrame(this._callbackRequestId),this._callbackRequestId=0)},r.prototype._onDispose=function(){this.stopRenderLoop(),this._container&&(window.removeEventListener("resize",this._onWindowResize),this._container.innerHTML="")},r._renderers=new Map,r}(rt.ProxyObject);o.Renderer=e}(pxsim||(pxsim={})),function(i){function t(e,t){var n,r,o=new Ammo.btTransform;return o.setOrigin(n=i.Helper.btVector3FromThree(t.position)),o.setRotation(r=i.Helper.btQuaternionFromThree(t.quaternion)),e.setWorldTransform(o),i.Helper.safeAmmoObjectDestroy(r),i.Helper.safeAmmoObjectDestroy(n),i.Helper.safeAmmoObjectDestroy(o),e}function e(e,t){var n=new Ammo.btTransform;e.getWorldTransform(n);var r=n.getOrigin(),o=n.getRotation();t.position.set(r.x(),r.y(),r.z()),t.quaternion.set(o.x(),o.y(),o.z(),o.w()),i.Helper.safeAmmoObjectDestroy(n)}i.btMotionStateFromObject3d=t,i.btMotionStateToObject3d=e;var n=function(a){function u(e,t,n){var r=a.call(this)||this;r._world=null,r._mass=0,n=Math.max(u._minMass,Math.min(u._maxMass,n));var o=new Ammo.btDefaultMotionState,i=t.btCollisionShape();r._mass=n,r._btvecLocalInertia=new Ammo.btVector3,r.isDynamic&&i.calculateLocalInertia(r._mass,r._btvecLocalInertia);var s=new Ammo.btRigidBodyConstructionInfo(r._mass,o,i,r._btvecLocalInertia);return r._btbody=new Ammo.btRigidBody(s),r._btbody.setFriction(u._defaultFriction),r._btbody.setSleepingThresholds(u._linearSleepingThreshold,u._angularSleepingThreshold),r._btshape=i,r._btmotionstate=o,r._btinfo=s,r._object3d=e,r.isKinematic=!0,r}return __extends(u,a),Object.defineProperty(u.prototype,"isStatic",{get:function(){return 0===this._mass},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"isDynamic",{get:function(){return!this.isStatic},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"isKinematic",{get:function(){return this._btbody.isKinematicObject()},set:function(e){if(!this.isStatic){var t=this._world;t&&this.removeRigidBody(t),this._btbody.setMassProps(e?0:this._mass,this._btvecLocalInertia),this._toggleCollisionFlag(2,e),this._btbody.activate(),this._object3d.matrixAutoUpdate=e,t&&this.addRigidBody(t)}},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"isActive",{get:function(){return this._btbody.isActive()},enumerable:!0,configurable:!0}),u.prototype.addRigidBody=function(e){this.removeRigidBody(e),t(this._btmotionstate,this._object3d),this._btbody.setMotionState(this._btmotionstate),this._world=e,this._world.btWorld.addRigidBody(this._btbody)},u.prototype.removeRigidBody=function(e){this._world===e&&(this._world.btWorld.removeRigidBody(this._btbody),this._world=null)},u.prototype.syncMotionStateToObject3d=function(){this._btbody.isStaticOrKinematicObject()||this.isActive&&(e(this._btbody.getMotionState(),this._object3d),this._object3d.updateMatrix())},u.prototype._toggleCollisionFlag=function(e,t){var n=this._btbody.getCollisionFlags();t?n|=e:n&=~e,this._btbody.setCollisionFlags(n)},u.prototype._onDispose=function(){i.Helper.safeAmmoObjectDestroy(this._btbody),i.Helper.safeAmmoObjectDestroy(this._btinfo),i.Helper.safeAmmoObjectDestroy(this._btmotionstate),i.Helper.safeAmmoObjectDestroy(this._btshape),i.Helper.safeAmmoObjectDestroy(this._btvecLocalInertia)},u._minMass=0,u._maxMass=100,u._defaultFriction=1,u._linearSleepingThreshold=1.6,u._angularSleepingThreshold=2.5,u}(rt.DisposableObject);i.RigidBody=n}(pxsim||(pxsim={}));