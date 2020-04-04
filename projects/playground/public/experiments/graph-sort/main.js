!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=61)}({0:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"e",function(){return a}),r.d(e,"f",function(){return o}),r.d(e,"d",function(){return u});const n="position",i="normal",s="uv",a="source",o="coords",u={FLOAT:5126,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FLOAT_MAT2X3:35685,FLOAT_MAT2X4:35686,FLOAT_MAT3X2:35687,FLOAT_MAT3X4:35688,FLOAT_MAT4X2:35689,FLOAT_MAT4X3:35690,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT:5125,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,TEXTURE_3D:32879,TEXTURE_2D_ARRAY:35866,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,HALF_FLOAT:5131,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042}},1:function(t,e,r){"use strict";var n=r(7);function i(t){function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}var s=r(4);const a={LEFT:0,MIDDLE:1,RIGHT:2};function o(t,e){const r=e||t,{element:n=document,enableRightButton:i}=t,s={pressed:{},drag:{x:0,y:0,dX:0,dY:0},dragging:!1};let o=0,u=0,f=0,c=0;function d(t){s.pressed[t.button]=t,t.button===a.LEFT&&(o=f=t.clientX,u=c=t.clientY,s.dragging=!0),r(s)}function _(t){delete s.pressed[t.button],delete s.drag.event,s.drag.x=0,s.drag.y=0,s.drag.dX=0,s.drag.dY=0,s.dragging=!1,r(s)}function h(t){s.dragging&&(s.drag.event=t,s.drag.x=o-t.clientX,s.drag.y=u-t.clientY,s.drag.dX=f-t.clientX,s.drag.dY=c-t.clientY,f=t.clientX,c=t.clientY,r(s))}function l(t){t.preventDefault()}return n.addEventListener("mousedown",d),document.addEventListener("mouseup",_),document.addEventListener("mousemove",h),i&&n.addEventListener("contextmenu",l),r(s),function(){n.removeEventListener("mousedown",d),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",_),i&&n.removeEventListener("contextmenu",l)}}var u=r(0);const f={wrap:"CLAMP_TO_EDGE",minFilter:"LINEAR",magFilter:"NEAREST"};const c={renderQuad:{attribs:{[u.b]:{buffer:new Float32Array([-1,1,-1,-1,1,1,1,-1]),storeType:"STATIC"},[u.c]:{buffer:new Float32Array([0,1,0,0,1,1,1,0]),storeType:"STATIC"}},drawType:"TRIANGLE_STRIP",itemCount:4}},d={basicEffect:{vert:`\nattribute vec2 ${u.b};\nattribute vec2 ${u.c};\nvarying vec2 ${u.f};\nvoid main() {\n\t${u.f} = ${u.c};\n\tgl_Position = vec4(${u.b}, 0.0, 1.0);\n}`,frag:`precision mediump float;\nuniform sampler2D ${u.e};\nvarying vec2 ${u.f};\nvoid main() {\n\tgl_FragColor = texture2D(${u.e}, ${u.f});\n}`}};function _(t){return S[t].bindPoint}function h(t,e){return r=>{t.uniform1i(e,r)}}function l(t,e){return r=>{t.uniform1iv(e,r)}}function E(t,e){return r=>{t.uniform2iv(e,r)}}function T(t,e){return r=>{t.uniform3iv(e,r)}}function A(t,e){return r=>{t.uniform4iv(e,r)}}function m(t,e,r,n){const i=_(e);return e=>{t.uniform1i(n,r),t.activeTexture(t.TEXTURE0+r),t.bindTexture(i,e._texture)}}function p(t,e,r,n,i){const s=_(e),a=new Int32Array(i);for(let t=0;t<i;++t)a[t]=r+t;return e=>{t.uniform1iv(n,a);for(const r in e)t.activeTexture(t.TEXTURE0+a[r]),t.bindTexture(s,e[r]._texture)}}const S={[u.d.FLOAT]:{Type:Float32Array,size:4,setter:function(t,e){return r=>{t.uniform1f(e,r)}},arraySetter:function(t,e){return r=>{t.uniform1fv(e,r)}}},[u.d.FLOAT_VEC2]:{Type:Float32Array,size:8,setter:function(t,e){return r=>{t.uniform2fv(e,r)}}},[u.d.FLOAT_VEC3]:{Type:Float32Array,size:12,setter:function(t,e){return r=>{t.uniform3fv(e,r)}}},[u.d.FLOAT_VEC4]:{Type:Float32Array,size:16,setter:function(t,e){return r=>{t.uniform4fv(e,r)}}},[u.d.INT]:{Type:Int32Array,size:4,setter:h,arraySetter:l},[u.d.INT_VEC2]:{Type:Int32Array,size:8,setter:E},[u.d.INT_VEC3]:{Type:Int32Array,size:12,setter:T},[u.d.INT_VEC4]:{Type:Int32Array,size:16,setter:A},[u.d.UNSIGNED_INT]:{Type:Uint32Array,size:4,setter:function(t,e){return r=>{t.uniform1ui(e,r)}},arraySetter:function(t,e){return r=>{t.uniform1uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC2]:{Type:Uint32Array,size:8,setter:function(t,e){return r=>{t.uniform2uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC3]:{Type:Uint32Array,size:12,setter:function(t,e){return r=>{t.uniform3uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC4]:{Type:Uint32Array,size:16,setter:function(t,e){return r=>{t.uniform4uiv(e,r)}}},[u.d.BOOL]:{Type:Uint32Array,size:4,setter:h,arraySetter:l},[u.d.BOOL_VEC2]:{Type:Uint32Array,size:8,setter:E},[u.d.BOOL_VEC3]:{Type:Uint32Array,size:12,setter:T},[u.d.BOOL_VEC4]:{Type:Uint32Array,size:16,setter:A},[u.d.FLOAT_MAT2]:{Type:Float32Array,size:16,setter:function(t,e){return r=>{t.uniformMatrix2fv(e,!1,r)}}},[u.d.FLOAT_MAT3]:{Type:Float32Array,size:36,setter:function(t,e){return r=>{t.uniformMatrix3fv(e,!1,r)}}},[u.d.FLOAT_MAT4]:{Type:Float32Array,size:64,setter:function(t,e){return r=>{t.uniformMatrix4fv(e,!1,r)}}},[u.d.FLOAT_MAT2X3]:{Type:Float32Array,size:24,setter:function(t,e){return r=>{t.uniformMatrix2x3fv(e,!1,r)}}},[u.d.FLOAT_MAT2X4]:{Type:Float32Array,size:32,setter:function(t,e){return r=>{t.uniformMatrix2x4fv(e,!1,r)}}},[u.d.FLOAT_MAT3X2]:{Type:Float32Array,size:24,setter:function(t,e){return r=>{t.uniformMatrix3x2fv(e,!1,r)}}},[u.d.FLOAT_MAT3X4]:{Type:Float32Array,size:48,setter:function(t,e){return r=>{t.uniformMatrix3x4fv(e,!1,r)}}},[u.d.FLOAT_MAT4X2]:{Type:Float32Array,size:32,setter:function(t,e){return r=>{t.uniformMatrix4x2fv(e,!1,r)}}},[u.d.FLOAT_MAT4X3]:{Type:Float32Array,size:48,setter:function(t,e){return r=>{t.uniformMatrix4x3fv(e,!1,r)}}},[u.d.SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D},[u.d.SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_3D},[u.d.SAMPLER_2D_SHADOW]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D},[u.d.SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.SAMPLER_2D_ARRAY_SHADOW]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.SAMPLER_CUBE_SHADOW]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.INT_SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D},[u.d.INT_SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_3D},[u.d.INT_SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.UNSIGNED_INT_SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D},[u.d.UNSIGNED_INT_SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_3D},[u.d.UNSIGNED_INT_SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.UNSIGNED_INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:p,bindPoint:u.d.TEXTURE_2D_ARRAY}};function g(t,e,r){return n=>{t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,r.itemSize,u.d.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}function F(t,e,r){return n=>{t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribIPointer(e,r.itemSize,u.d.INT,n.stride||0,n.offset||0)}}function b(t,e,r){const n=r.size,i=r.count;return r=>{t.bindBuffer(t.ARRAY_BUFFER,r.buffer);const s=n,a=s/i,o=S[u.d.FLOAT].size*s,f=r.normalize||!1,c=r.offset||0,d=o/i;for(let r=0;r<i;++r)t.enableVertexAttribArray(e+r),t.vertexAttribPointer(e+r,a,u.d.FLOAT,f,o,c+d*r)}}const R={[u.d.FLOAT]:{size:4,setter:g,itemSize:1},[u.d.FLOAT_VEC2]:{size:8,setter:g,itemSize:2},[u.d.FLOAT_VEC3]:{size:12,setter:g,itemSize:3},[u.d.FLOAT_VEC4]:{size:16,setter:g,itemSize:4},[u.d.INT]:{size:4,setter:F,itemSize:1},[u.d.INT_VEC2]:{size:8,setter:F,itemSize:2},[u.d.INT_VEC3]:{size:12,setter:F,itemSize:3},[u.d.INT_VEC4]:{size:16,setter:F,itemSize:4},[u.d.UNSIGNED_INT]:{size:4,setter:F,itemSize:1},[u.d.UNSIGNED_INT_VEC2]:{size:8,setter:F,itemSize:2},[u.d.UNSIGNED_INT_VEC3]:{size:12,setter:F,itemSize:3},[u.d.UNSIGNED_INT_VEC4]:{size:16,setter:F,itemSize:4},[u.d.BOOL]:{size:4,setter:F,itemSize:1},[u.d.BOOL_VEC2]:{size:8,setter:F,itemSize:2},[u.d.BOOL_VEC3]:{size:12,setter:F,itemSize:3},[u.d.BOOL_VEC4]:{size:16,setter:F,itemSize:4},[u.d.FLOAT_MAT2]:{size:4,setter:b,count:2},[u.d.FLOAT_MAT3]:{size:9,setter:b,count:3},[u.d.FLOAT_MAT4]:{size:16,setter:b,count:4}};Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Uint16Array,Uint16Array,Uint16Array,Uint16Array,Uint32Array,Uint32Array,Uint32Array,Uint32Array,Uint32Array;function y(t,e){if(e.enable)for(const r of e.enable)t.enable(r);if(e.disable)for(const r of e.disable)t.disable(r);e.blendFunc&&t.blendFunc.apply(t,e.blendFunc),null!=e.depthFunc&&t.depthFunc(e.depthFunc),null!=e.cullFace&&t.cullFace(e.cullFace),null!=e.frontFace&&t.frontFace(e.frontFace),null!=e.lineWidth&&t.lineWidth(e.lineWidth),e.colorMask&&t.colorMask.apply(t,e.colorMask),null!=e.depthMask&&t.depthMask(e.depthMask),e.clearColor&&t.clearColor.apply(t,e.clearColor),null!=e.clearDepth&&t.clearDepth(e.clearDepth),null!=e.clearBits&&t.clear(e.clearBits)}function I(t,e){if(e.enable)for(const r of e.enable)t.disable(r);if(e.disable)for(const r of e.disable)t.enable(r)}let N=1;class L{constructor(t,e="Form"+N++){this._painter=t,this.id=e}update(t){const e=this._painter.gl;t.drawType&&(this._drawType=e[t.drawType]),t.itemCount&&(this._itemCount=t.itemCount),this._attribs=this._attribs||{};for(const r in t.attribs){const n=t.attribs[r];null==this._attribs[r]&&(this._attribs[r]={buffer:e.createBuffer()}),e.bindBuffer(e.ARRAY_BUFFER,this._attribs[r].buffer),e.bufferData(e.ARRAY_BUFFER,n.buffer,e[(n.storeType||"STATIC")+"_DRAW"])}if(t.elements){const r=t.elements.buffer;null==this._elements&&(this._elements={buffer:e.createBuffer(),glType:null}),this._elements.glType=function(t){if(t instanceof Int8Array)return u.d.BYTE;if(t instanceof Uint8Array)return u.d.UNSIGNED_BYTE;if(t instanceof Uint8ClampedArray)return u.d.UNSIGNED_BYTE;if(t instanceof Int16Array)return u.d.SHORT;if(t instanceof Uint16Array)return u.d.UNSIGNED_SHORT;if(t instanceof Int32Array)return u.d.INT;if(t instanceof Uint32Array)return u.d.UNSIGNED_INT;if(t instanceof Float32Array)return u.d.FLOAT;throw new Error("unsupported typed array type")}(r),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._elements.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e[(t.elements.storeType||"STATIC")+"_DRAW"])}return this}destroy(){const t=this._painter.gl;for(const e in this._attribs)t.deleteBuffer(this._attribs[e].buffer);this._attribs={},this._elements&&(t.deleteBuffer(this._elements.buffer),this._elements=void 0)}}var O=r(3),U=r(8);let D=1;class M{constructor(t,e="Texture"+D++){this._painter=t,this.id=e,this._texture=null,this._data={}}update(t){const e=this._painter.gl;if(null==this._texture&&(this._texture=e.createTexture()),e.bindTexture(e.TEXTURE_2D,this._texture),t.wrap&&t.wrap!==this._data.wrap||t.wrapS&&t.wrapS!==this._data.wrapS||t.wrapT&&t.wrapT!==this._data.wrapT){let r,n;t.wrap?r=n=t.wrap:(n=t.wrapT||f.wrap,r=t.wrapS||f.wrap),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e[r]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e[n])}else this._data.wrap||this._data.wrapS||this._data.wrapT||(this._data.wrap=this._data.wrapT=this._data.wrapS=f.wrap,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e[this._data.wrap]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e[this._data.wrap]));return t.magFilter&&t.magFilter!==this._data.magFilter?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[t.magFilter]):this._data.magFilter||(this._data.magFilter=f.magFilter,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[this._data.magFilter])),t.minFilter&&t.minFilter!==this._data.minFilter?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[t.minFilter]):this._data.minFilter||(this._data.minFilter=f.minFilter,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[this._data.minFilter])),t.asset&&e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.asset),void 0!==t.data&&e.texImage2D(e.TEXTURE_2D,0,"FLOAT"===t.type&&this._painter.isWebGL2?e.RGBA32F:e.RGBA,t.width,t.height,0,e.RGBA,e[t.type||"UNSIGNED_BYTE"],t.data),null!=t.flipY&&t.flipY!==this._data.flipY&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t.flipY),t.minFilter&&t.minFilter.indexOf("MIPMAP")>0&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),Object.assign(this._data,t),this}destroy(){this._painter.gl.deleteTexture(this._texture),this._data={},this._texture=null}}let P=1;class C{constructor(t,e="Form"+P++){this._painter=t,this.id=e,this.width=0,this.height=0,this.frameBuffer=null,this.textures=[],this.depthBuffer=null,this.bufferStructure=[],this._data={}}update(t){const e=this._painter.gl,r=t.width||this.width,n=t.height||this.height;if(!r||!n)return this;if(r===this.width&&n===this.height){if(!t.bufferStructure)return this;if(t.bufferStructure.length===this.bufferStructure.length&&this.bufferStructure.every((e,r)=>Object(U.b)(e,t.bufferStructure[r])))return this}null==this.frameBuffer&&(this.frameBuffer=e.createFramebuffer()),e.bindFramebuffer(e.FRAMEBUFFER,this.frameBuffer),t.bufferStructure&&t.bufferStructure.length&&(this.bufferStructure=t.bufferStructure,this.bufferStructure.some(t=>"FLOAT"===t.type)&&(this._painter.isWebGL2?e.getExtension("EXT_color_buffer_float"):e.getExtension("OES_texture_float")));const i=this.bufferStructure.length||1,s=[e.COLOR_ATTACHMENT0];if(i>1){let t;this._painter.isWebGL2||(t=e.getExtension("WEBGL_draw_buffers"));const r=this._painter.isWebGL2?e.COLOR_ATTACHMENT0:t.COLOR_ATTACHMENT0_WEBGL;for(let t=0;t<i;t++)s[t]=r+t;this._painter.isWebGL2?e.drawBuffers(s):t.drawBuffersWEBGL(s)}for(let t=0;t<i;t++){this.textures[t]||(this.textures[t]=new M(this._painter,this.id+"_Texture"+t));const i=this.textures[t];i.update(Object.assign({minFilter:"NEAREST",magFilter:"NEAREST"},this.bufferStructure[t],{data:null,width:r,height:n})),e.framebufferTexture2D(e.FRAMEBUFFER,s[t],e.TEXTURE_2D,i._texture,0)}null==this.depthBuffer&&(this.depthBuffer=e.createRenderbuffer()),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,r,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer);const a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a!==e.FRAMEBUFFER_COMPLETE&&console.error("framebuffer error",a,t),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),Object.assign(this._data,t),this.width=r,this.height=n,this}destroy(){const t=this._painter.gl;t.deleteFramebuffer(this.frameBuffer),t.deleteRenderbuffer(this.depthBuffer);for(const e of this.textures)t.deleteTexture(e);this.textures=[],this.frameBuffer=null,this.depthBuffer=null,this._data={},this.bufferStructure=[],this.width=0,this.height=0}}let v=1;class w{constructor(t,e="Frame"+v++){this._painter=t,this.id=e,this.width=0,this.height=0,this.layers=[],this._data={},this._targets=[],this._textures=[]}image(t=0){return this._targets.length&&this._targets[this._targets.length-1].textures[t]||this._textures[t]}update(t={}){const e=this._painter.gl,r=Array.isArray(t.layers)?t.layers:t.layers?[t.layers]:this.layers,n=t.selfReferencing||this._data.selfReferencing,i=r.reduce((t,e)=>t+(e._uniforms.length||1),0),s=n||i>1?2:i,a=t.width||this._data.width||e.drawingBufferWidth,o=t.height||this._data.height||e.drawingBufferHeight;s!==this._targets.length&&this._destroyTargets();const u=Object.assign({},t,{width:a,height:o});return!this._targets.length&&s>0?this._targets=Object(O.g)(t=>new C(this._painter,this.id+"_target"+(t+1)).update(u),s):this._targets.length&&this._targets.forEach(t=>{t.update(u)}),t.texture&&(this._textures[0]||(this._textures[0]=new M(this._painter,this.id+"_Texture0")),t.texture.width=t.texture.width||a,t.texture.height=t.texture.height||o,this._textures[0].update(t.texture)),Object.assign(this._data,t),this.layers=r,this.width=a,this.height=o,this}destroy(){this._destroyTargets(),this._textures.forEach(t=>t.destroy()),this._textures=[],this._data={},this.layers=[],this.width=0,this.height=0}_destroyTargets(){this._targets.forEach(t=>t.destroy()),this._targets=[]}_swapTargets(){if(this._targets.length>1){const t=this._targets[0];this._targets[0]=this._targets[1],this._targets[1]=t}}}let B=1;class x{constructor(t="DrawingLayer"+B++){this.id=t,this.sketches=[],this._data={},this._uniforms=[]}update(t){if(t.sketches&&(this.sketches=Array.isArray(t.sketches)?t.sketches:[t.sketches]),t.frag){const e=this.sketches&&this.sketches[0];e&&e.shade.update({frag:t.frag})}return t.uniforms&&(this._uniforms=Array.isArray(t.uniforms)?t.uniforms:[t.uniforms]),Object.assign(this._data,t),this}destroy(){for(const t of this.sketches)t.destroy();this._data.sketches=[],this._data={},this._uniforms=[]}}let z=1;class G{constructor(t,e="Shade"+z++){this._painter=t,this.id=e}update(t){const e=this._painter.gl,r=t.frag&&t.frag.trim()||this.fragSource,n=t.vert&&t.vert.trim()||this.vertSource;if(!r||!n||r===this.fragSource&&n===this.vertSource)return this;this.destroy(),r.indexOf("GL_EXT_draw_buffers")>=0&&e.getExtension("WEBGL_draw_buffers");const i=e.createProgram(),s=e.createShader(e.FRAGMENT_SHADER),a=e.createShader(e.VERTEX_SHADER);if(i&&a&&s){if(this._program=i,this._frag=s,this._vert=a,e.attachShader(i,a),e.attachShader(i,s),e.shaderSource(a,n),e.shaderSource(s,r),e.compileShader(a),e.compileShader(s),e.getShaderParameter(a,e.COMPILE_STATUS)||console.error("Error Compiling Vertex Shader!\n",e.getShaderInfoLog(a),X(n)),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("Error Compiling Fragment Shader!\n",e.getShaderInfoLog(s),X(r)),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const t=e.getProgramInfoLog(i);console.error("Error in program linking:",t)}return this._uniformSetters=function(t,e){let r=0;function n(e,n){const i=t.getUniformLocation(e,n.name),s=n.size>1&&"[0]"===n.name.substr(-3),a=n.type,o=S[a];if(!o)throw new Error("unknown type: 0x"+a.toString(16));if(null==i)return;let u;if(null===o.Type){const e=r;r+=n.size,u=s?o.arraySetter(t,a,e,i,n.size):o.setter(t,a,e,i)}else u=o.arraySetter&&s?o.arraySetter(t,i):o.setter(t,i);return{setter:u,location:i}}const i={},s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const s=t.getActiveUniform(e,r);if(!s)continue;let a=s.name;if("[0]"===a.substr(-3)&&(a=a.substr(0,a.length-3)),e){const t=n(e,s);t&&(i[a]=t)}}return i}(e,i),this._attributeSetters=function(t,e){const r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const n=t.getActiveAttrib(e,i);if(!n)break;const s=t.getAttribLocation(e,n.name),a=R[n.type],o=a.setter(t,s,a);r[n.name]={setter:o,location:s}}return r}(e,i),this.fragSource=r,this.vertSource=n,this}}destroy(){const t=this._painter.gl;t.deleteProgram(this._program),t.deleteShader(this._frag),t.deleteShader(this._vert),this.vertSource=void 0,this.fragSource=void 0,this._attributeSetters={},this._uniformSetters={}}}function X(t){return t.trim().split("\n").map((t,e)=>e+1+": "+t).join("\n")}let j=1;class V{constructor(t="Sketch"+j++){this.id=t,this._uniforms=[]}update(t){return t.drawSettings&&(this._drawSettings=t.drawSettings),t.form&&(this.form=t.form),t.shade&&(this.shade=t.shade),t.uniforms&&(this._uniforms=Array.isArray(t.uniforms)?t.uniforms:[t.uniforms]),this}destroy(){this.form&&this.form.destroy(),this.shade&&this.shade.destroy(),this._drawSettings=void 0,this._uniforms=[]}}var Y=r(9);class k{constructor(t,e={}){this.canvas=t,this.isWebGL2=!0,this.maxBufferSamples=0;let r=null;if(e.useWebGL1||(r=t.getContext("webgl2",e)||t.getContext("experimental-webgl2",e)),null==r&&(this.isWebGL2=!1,r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e)),null==r)throw Error("Cannot initialize WebGL.");this.gl=r,this.sizeMultiplier=e.sizeMultiplier||1,this.isWebGL2&&(this.maxBufferSamples=r.getParameter(r.MAX_SAMPLES)),this.resize(),y(r,function(t){return{clearColor:[0,0,0,1],blendFunc:[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA]}}(r)),this._renderQuad=this.createForm().update(c.renderQuad),this._staticSketch=this.createFlatSketch()}resize(){return Object(Y.b)(this.gl.canvas,this.sizeMultiplier),this}destroy(){this._staticSketch.destroy(),this._renderQuad.destroy()}updateDrawSettings(t){return y(this.gl,Object.assign({},t)),this}createForm(t){return new L(this,t)}createShade(t){return new G(this,t)}createSketch(t){return new V(t)}createFlatSketch(t){const e=this.createSketch(t);return e.update({form:this._renderQuad,shade:this.createShade(e.id+"_defaultShade").update(d.basicEffect)})}createFrame(t){return new w(this,t)}createLayer(t){return new x(t)}createEffect(t){const e=this.createLayer(t);return e.update({sketches:this.createFlatSketch(e.id+"_effectSketch")})}draw(t,e){const r=this.gl;return r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),H(r,t,e),this}compose(...t){for(const e of t)$(this.gl,e);return this}display(t,e=0){return this.draw(this._staticSketch,{source:t.image(e)})}}function H(t,e,r,n){const{shade:i,form:s,_drawSettings:a,_uniforms:o}=e;if(!i||!s)throw Error("cannot draw, shader or geometry are not set");t.useProgram(i._program),function(t,e){for(const r in e._attribs){const n=t._attributeSetters[r];n&&n.setter(e._attribs[r])}}(i,s),r&&K(i,r,n),a&&y(t,a);for(let r=0;r<(o.length||1);r++)W(t,e,o[r],n);a&&I(t,a)}function W(t,e,r,n){r&&K(e.shade,r,n),e.form._elements&&null!=e.form._elements.glType?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.form._elements.buffer),t.drawElements(e.form._drawType,e.form._itemCount,e.form._elements.glType,0)):t.drawArrays(e.form._drawType,0,e.form._itemCount)}function K(t,e,r){for(const n in e){const i=t._uniformSetters[n];if(i){let t=e[n];"function"==typeof t&&(t=t()),"string"==typeof t&&r?i.setter(r[t]):i.setter(t)}}}function Q(t,e,r,n,i){n?(t.bindFramebuffer(t.FRAMEBUFFER,n.frameBuffer),t.viewport(0,0,n.width,n.height)):(t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight)),e._data.drawSettings&&y(t,e._data.drawSettings);for(const n of e.sketches)H(t,n,r,i);e._data.drawSettings&&I(t,e._data.drawSettings)}function $(t,e){for(let r=0;r<e.layers.length;r++){const n=e.layers[r],i=n._uniforms.length||1;for(let s=0;s<i;s++){const i=e._targets[0],a=r+s===0&&e._textures.length?e._textures:e._targets[1]&&e._targets[1].textures;Q(t,n,n._uniforms[s],i,a),e._swapTargets()}}}let q,Z;function J(t,e){return function(t,e){t!==q&&(q=t,Z=new k(t,e),_t.device.canvas=t,St&&St(),gt&&gt(),Ft&&Ft(),St=i(()=>Object(n.a)(()=>{Z.sizeMultiplier=_t.device.sizeMultiplier,Z.resize(),mt(pt.RESIZE)},"resize")),gt=o({element:t,enableRightButton:!0},t=>_t.device.mouse=t),Ft=Object(s.b)(t=>_t.device.keys=t))}(t,e),Z}r.d(e,"i",function(){return J}),r.d(e,"f",function(){return et}),r.d(e,"j",function(){return nt}),r.d(e,"k",function(){return st}),r.d(e,"h",function(){return ot}),r.d(e,"g",function(){return ft}),r.d(e,"e",function(){return dt}),r.d(e,"d",function(){return ht}),r.d(e,"m",function(){return lt}),r.d(e,"l",function(){return Et}),r.d(e,"a",function(){return At}),r.d(e,"c",function(){return mt}),r.d(e,"b",function(){return pt});const tt={};function et(t,e){return tt[e]||(tt[e]=t.createForm("Form_"+e))}const rt={};function nt(t,e){return rt[e]||(rt[e]=t.createShade("Shade_"+e))}const it={};function st(t,e){return it[e]||(it[e]=t.createSketch("Sketch_"+e))}const at={};function ot(t,e){return at[e]||(at[e]=t.createLayer("Layer_"+e))}const ut={};function ft(t,e){return ut[e]||(ut[e]=t.createFrame("Frame_"+e))}const ct={};function dt(t,e){return ct[e]||(ct[e]=t.createEffect("Effect_"+e))}const _t={device:{tpf:0,sizeMultiplier:1}};function ht(t){return _t[t]}function lt(t,e,r){const n=_t;if(n[t]){const i=r&&r.reset;!0!==i&&(e=function t(e,r,n){const i=n&&n.ignore;if("object"==typeof e&&"object"==typeof r&&!Array.isArray(e)&&!Array.isArray(r)&&e!==r){for(const n in e)if(e.hasOwnProperty(n)&&!(i&&n in i&&!0===i[n])){const s=e[n],a=r[n];void 0!==a&&(e[n]=t(s,a,{ignore:i&&i[n]}))}return e}return r}(e,n[t],{ignore:i}))}n[t]=e}function Et(){return _t}window.state=_t;const Tt={};function At(t,e){Tt[t]=e}function mt(t){for(const e in Tt)Tt[e](t,_t)}const pt={FRAME:"frame",RESIZE:"resize"};let St,gt,Ft},12:function(t,e,r){"use strict";function n(t){return t>0?1:t<0?-1:0}function i(t,e,r){return e+t*(r-e)}function s(t,e,r){return Math.max(t,Math.min(r,e))}r.d(e,"c",function(){return n}),r.d(e,"b",function(){return i}),r.d(e,"a",function(){return s});Math.PI},3:function(t,e,r){"use strict";r.d(e,"f",function(){return i}),r.d(e,"a",function(){return s}),r.d(e,"g",function(){return a}),r.d(e,"h",function(){return o}),r.d(e,"c",function(){return u}),r.d(e,"e",function(){return f}),r.d(e,"d",function(){return c}),r.d(e,"b",function(){return d});var n=r(6);function i(t){return t[Object(n.b)(t.length)]}function s(t,e){for(let r=0;r<e;r++)t(r)}function a(t,e,r=[]){for(let n=0;n<e;n++)r[n]=t(n);return r}function o(t,e,r,n=[]){const i=Math.min(e.length,r.length);for(let s=0;s<i;s++)n[s]=t(e[s],r[s]);return n}function u(t,e=[]){for(const r of t){const t=e.length;for(let n=0;n<r.length;n++)e[n+t]=r[n]}return e}function f(t,e,r=[]){return u(e.map(t),r)}function c(t,e){if(Array.isArray(e))return e.map(t);{const r={};for(const n in e)r[n]=t(e[n],n);return r}}function d(t,e){for(const r in e)t(e[r],r)}},4:function(t,e,r){"use strict";var n;function i(t,e){const r=e||t,{element:n=window}=t,i={};function s(t){i[t.keyCode]=Date.now(),r(i)}function a(t){delete i[t.keyCode],r(i)}return n.addEventListener("keyup",a,!1),n.addEventListener("keydown",s,!1),r(i),function(){n.removeEventListener("keyup",a),n.removeEventListener("keydown",s)}}r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i}),function(t){t[t.CANCEL=3]="CANCEL",t[t.HELP=6]="HELP",t[t.BACK_SPACE=8]="BACK_SPACE",t[t.TAB=9]="TAB",t[t.CLEAR=12]="CLEAR",t[t.RETURN=13]="RETURN",t[t.ENTER=14]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.PAUSE=19]="PAUSE",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.PRINTSCREEN=44]="PRINTSCREEN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.SEMICOLON=59]="SEMICOLON",t[t.EQUALS=61]="EQUALS",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.MULTIPLY=106]="MULTIPLY",t[t.ADD=107]="ADD",t[t.SEPARATOR=108]="SEPARATOR",t[t.SUBTRACT=109]="SUBTRACT",t[t.DECIMAL=110]="DECIMAL",t[t.DIVIDE=111]="DIVIDE",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.F13=124]="F13",t[t.F14=125]="F14",t[t.F15=126]="F15",t[t.F16=127]="F16",t[t.F17=128]="F17",t[t.F18=129]="F18",t[t.F19=130]="F19",t[t.F20=131]="F20",t[t.F21=132]="F21",t[t.F22=133]="F22",t[t.F23=134]="F23",t[t.F24=135]="F24",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COMMA=188]="COMMA",t[t.PERIOD=190]="PERIOD",t[t.SLASH=191]="SLASH",t[t.BACK_QUOTE=192]="BACK_QUOTE",t[t.OPEN_BRACKET=219]="OPEN_BRACKET",t[t.BACK_SLASH=220]="BACK_SLASH",t[t.CLOSE_BRACKET=221]="CLOSE_BRACKET",t[t.QUOTE=222]="QUOTE",t[t.META=224]="META"}(n||(n={}))},44:function(t,e){t.exports="precision mediump float;\n#define GLSLIFY 1\n\nvoid main() {\n\tgl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}\n"},45:function(t,e){t.exports="#define GLSLIFY 1\nattribute vec2 position;\n\nuniform vec2 size;\n\nvoid main() {\n\tgl_Position = vec4((position / size) * 2.0 - 1.0, 0.0, 1.0);\n}\n"},46:function(t,e){t.exports="precision mediump float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\n\nvoid main() {\n\tgl_FragColor = vec4(vColor, 1.0);\n}\n"},47:function(t,e){t.exports="#define GLSLIFY 1\nattribute vec2 position;\nattribute vec3 color;\n\nuniform vec2 size;\n\nvarying vec3 vColor;\n\nvoid main() {\n\tvColor = color;\n\tgl_Position = vec4((position / size) * 2.0 - 1.0, 0.0, 1.0);\n\tgl_PointSize = 20.0;\n}\n"},5:function(t,e,r){"use strict";function n(t,e,r=[]){for(let n=0;n<t.length;n++)r[n]=t[n]+e[n];return r}function i(t,e,r=[]){for(let n=0;n<t.length;n++)r[n]=t[n]-e[n];return r}function s(t,e,r=[]){for(let n=0;n<e.length;n++)r[n]=e[n]*t;return r}function a(t,e,r=[]){for(let n=0;n<e.length;n++)r[n]=e[n]/t;return r}function o(t){let e=0;for(let r=0;r<t.length;r++){const n=t[r];e+=n*n}return Math.sqrt(e)}function u(t,e=[]){return a(o(t),t,e)}function f(t,e){let r=0;for(let n=0;n<t.length;n++)r+=t[n]*e[n];return r}function c(t,e,r=[]){return r[0]=t[1]*e[2]-t[2]*e[1],r[1]=t[2]*e[0]-t[0]*e[2],r[2]=t[0]*e[1]-t[1]*e[0],r}function d(t,e){return t[0]*e[1]-t[1]*e[0]}r.d(e,"a",function(){return n}),r.d(e,"i",function(){return i}),r.d(e,"g",function(){return s}),r.d(e,"d",function(){return a}),r.d(e,"f",function(){return o}),r.d(e,"h",function(){return u}),r.d(e,"e",function(){return f}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return d});r(8).a},6:function(t,e,r){"use strict";function n(t){return Math.floor(Math.random()*t)}function i(t,e){return n(e-t)+t}function s(){return(Math.random()+Math.random()+Math.random())/3}r.d(e,"b",function(){return n}),r.d(e,"c",function(){return i}),r.d(e,"a",function(){return s})},61:function(t,e,r){t.exports=r(69)},69:function(t,e,r){"use strict";r.r(e);var n=r(1),i=r(7);const s=document.getElementById("canvas"),a=Object(n.i)(s),o=a.gl;Object.assign({},n.b);r(12);var u=r(5),f=r(3);class c{constructor(t){this.value=t}static of(t){return new c(t)}of(t){return new c(t)}map(t){return new c(t(this.value))}ap(t){return t.chain(this.map.bind(this))}chain(t){return t(this.value)}combine(t,e){return this.chain(r=>e.chain(e=>c.of(t(r,e))))}pull(t,e){return this.chain(r=>c.of(t(r,e)))}}function d(t,e,r){return t[e]=r(t[e]),t}var _=r(6);const h=6,l=200,E=Object(f.g)(t=>({id:t,pos:[Math.random()*s.width,Math.random()*s.height],ns:Object(_.b)(h),force:[0,0]}),40),T=Object(f.c)(Object(f.g)(t=>{if(t<37){const e=Object(_.c)(t+1,39),r=[[t,e]],n=Object(_.c)(t+1,39);return n!==e&&r.push([t,n]),r}return[]},40));function A(t,e,r,n){const i=t=>r=>t.combine(u.g,e).pull(u.a,r).value;d(r,"force",i(t)),d(n,"force",i(t.map(t=>-t)))}const m=Object(n.f)(a,"points"),p=Object(n.f)(a,"lines"),S=3;var g=r(44),F=r.n(g),b=r(45),R=r.n(b),y=r(46),I=r.n(y),N=r(47),L=r.n(N);const O=Object(n.j)(a,"point").update({vert:L.a,frag:I.a}),U=Object(n.j)(a,"line").update({vert:R.a,frag:F.a}),D=Object(n.k)(a,"point").update({form:m,shade:O,uniforms:{size:[s.width,s.height]}}),M=Object(n.k)(a,"lines").update({form:p,shade:U,drawSettings:{clearColor:[0,0,0,1],clearBits:o.COLOR_BUFFER_BIT,cullFace:o.BACK,enable:[o.CULL_FACE]},uniforms:{size:[s.width,s.height]}});let P=0;Object(i.b)(t=>{P+=t,function(t){for(const t of T){const e=E[t[0]],r=E[t[1]],n=c.of(r.pos).pull(u.i,e.pos),i=n.map(u.h);A(n.map(u.f).map(t=>t-l).map(t=>2*t),i,e,r)}for(let t=0;t<E.length-1;t++){const e=E[t];for(let r=t+1;r<E.length;r++){const t=E[r],n=c.of(t.pos).pull(u.i,e.pos),i=n.map(u.h),s=n.map(u.f);A(s.map(t=>-Math.max(100-t,0)),i,e,t),t.ns===e.ns?A(s.map(t=>t-100),i,e,t):A(s.map(t=>-Math.max(200-t,0)),i,e,t)}}for(const e of E){const r=e.force,n=Object(u.f)(r)-3;if(n>0){const i=Object(u.d)(n+3,r);e.pos=Object(u.a)(e.pos,Object(u.g)(n*(t/500),i)),e.force=[0,0]}}}(t),m.update({drawType:"POINTS",attribs:{position:{buffer:new Float32Array(Object(f.e)(t=>t.pos,E)),storeType:"DYNAMIC"},color:{buffer:new Float32Array(Object(f.e)(t=>(function(t){return t.map(t=>t/255)})([t.ns/h*255,255*(t.ns/h+1/3)%255,255*(t.ns/h+2/3)%255]),E)),storeType:"DYNAMIC"}},itemCount:E.length}),p.update({drawType:"TRIANGLES",attribs:{position:{buffer:new Float32Array(Object(f.e)(t=>{const e=E[t[0]],r=E[t[1]],n=Object(u.h)(Object(u.i)(r.pos,e.pos)),i=[n[1],-n[0]],s=Object(u.a)(e.pos,Object(u.g)(S/2,i)),a=Object(u.a)(e.pos,Object(u.g)(-S/2,i)),o=Object(u.a)(r.pos,Object(u.g)(S/2,i)),c=Object(u.a)(r.pos,Object(u.g)(-S/2,i));return Object(f.c)([o,a,s,a,o,c])},T)),storeType:"DYNAMIC"}},itemCount:6*T.length}),a.draw(M),a.draw(D),P>=1e4&&Object(i.c)("render")},"render")},7:function(t,e,r){"use strict";r.d(e,"a",function(){return f}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return d});let n=null;const i={};let s=!1,a=0,o=0;function u(t){const e=o?t-o:o;if(o=t,n){for(const t in n)n[t](e);n=null}let r=0;for(const t in i)r++,i[t](e);r?requestAnimationFrame(u):(s=!1,o=0)}function f(t,e){e=e||t.name||a++,(n=n||{})[e]=t,s||(requestAnimationFrame(u),s=!0)}function c(t,e){return e=e||t.name||a++,i[e]=t,s||(requestAnimationFrame(u),s=!0),e}function d(t){"function"==typeof t&&(t=t.name),delete i[t]}},8:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i});function n(t,e){if(t===e)return!0;if(!e||!t)return!1;if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function i(t,e){if(t===e)return!0;if(!e)return!1;const r=Object.keys(t);if(!n(r,Object.keys(e)))return!1;for(const n of r)if(t[n]!==e[n])return!1;return!0}},9:function(t,e,r){"use strict";function n(t,...e){return e.reduce((e,r)=>e|t[r.toUpperCase()+"_BUFFER_BIT"],0)}function i(t,e=1){const r=t.clientWidth*e|0,n=t.clientHeight*e|0;return(t.width!==r||t.height!==n)&&(t.width=r,t.height=n,!0)}r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})}});
//# sourceMappingURL=main.js.map