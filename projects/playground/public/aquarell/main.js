!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=71)}({0:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"e",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"d",(function(){return o}));const n="position",i="normal",s="uv",a="source",u="coords",o={FLOAT:5126,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT:5124,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,FLOAT_MAT2X3:35685,FLOAT_MAT2X4:35686,FLOAT_MAT3X2:35687,FLOAT_MAT3X4:35688,FLOAT_MAT4X2:35689,FLOAT_MAT4X3:35690,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,UNSIGNED_INT:5125,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,TEXTURE_3D:32879,TEXTURE_2D_ARRAY:35866,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,HALF_FLOAT:5131,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042},f=6403,c=33319,d=6407,_=6408,l=6402,h=33321,E=33323,T=32849,A=32856,R=33325,m=33327,F=34843,S=34842,g=33332,p=33338,b=36215,N=36214,y=33334,I=33340,U=36209,L=36208,D=33189,M=33190,O=36012;o.UNSIGNED_BYTE,o.UNSIGNED_SHORT,o.UNSIGNED_INT,o.FLOAT},1:function(t,e,r){"use strict";r.d(e,"i",(function(){return et})),r.d(e,"f",(function(){return nt})),r.d(e,"j",(function(){return st})),r.d(e,"k",(function(){return ut})),r.d(e,"h",(function(){return ft})),r.d(e,"g",(function(){return dt})),r.d(e,"e",(function(){return lt})),r.d(e,"d",(function(){return Et})),r.d(e,"m",(function(){return Tt})),r.d(e,"l",(function(){return At})),r.d(e,"a",(function(){return mt})),r.d(e,"c",(function(){return Ft})),r.d(e,"b",(function(){return St}));var n=r(10);function i(t){function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}var s=r(6),a=r(18),u=r(0);const o="CLAMP_TO_EDGE",f="LINEAR",c="NEAREST";const d={renderQuad:{attribs:{[u.b]:{buffer:new Float32Array([-1,1,-1,-1,1,1,1,-1]),storeType:"STATIC"},[u.c]:{buffer:new Float32Array([0,1,0,0,1,1,1,0]),storeType:"STATIC"}},drawType:"TRIANGLE_STRIP",itemCount:4}},_={basicEffect:{vert:`\nattribute vec2 ${u.b};\nattribute vec2 ${u.c};\nvarying vec2 ${u.f};\nvoid main() {\n\t${u.f} = ${u.c};\n\tgl_Position = vec4(${u.b}, 0.0, 1.0);\n}`,frag:`precision mediump float;\nuniform sampler2D ${u.e};\nvarying vec2 ${u.f};\nvoid main() {\n\tgl_FragColor = texture2D(${u.e}, ${u.f});\n}`}};function l(t){return S[t].bindPoint}function h(t,e){return r=>{t.uniform1i(e,r)}}function E(t,e){return r=>{t.uniform1iv(e,r)}}function T(t,e){return r=>{t.uniform2iv(e,r)}}function A(t,e){return r=>{t.uniform3iv(e,r)}}function R(t,e){return r=>{t.uniform4iv(e,r)}}function m(t,e,r,n){const i=l(e);return e=>{t.uniform1i(n,r),t.activeTexture(t.TEXTURE0+r),t.bindTexture(i,e._texture)}}function F(t,e,r,n,i){const s=l(e),a=new Int32Array(i);for(let t=0;t<i;++t)a[t]=r+t;return e=>{t.uniform1iv(n,a);for(const r in e)t.activeTexture(t.TEXTURE0+a[r]),t.bindTexture(s,e[r]._texture)}}const S={[u.d.FLOAT]:{Type:Float32Array,size:4,setter:function(t,e){return r=>{t.uniform1f(e,r)}},arraySetter:function(t,e){return r=>{t.uniform1fv(e,r)}}},[u.d.FLOAT_VEC2]:{Type:Float32Array,size:8,setter:function(t,e){return r=>{t.uniform2fv(e,r)}}},[u.d.FLOAT_VEC3]:{Type:Float32Array,size:12,setter:function(t,e){return r=>{t.uniform3fv(e,r)}}},[u.d.FLOAT_VEC4]:{Type:Float32Array,size:16,setter:function(t,e){return r=>{t.uniform4fv(e,r)}}},[u.d.INT]:{Type:Int32Array,size:4,setter:h,arraySetter:E},[u.d.INT_VEC2]:{Type:Int32Array,size:8,setter:T},[u.d.INT_VEC3]:{Type:Int32Array,size:12,setter:A},[u.d.INT_VEC4]:{Type:Int32Array,size:16,setter:R},[u.d.UNSIGNED_INT]:{Type:Uint32Array,size:4,setter:function(t,e){return r=>{t.uniform1ui(e,r)}},arraySetter:function(t,e){return r=>{t.uniform1uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC2]:{Type:Uint32Array,size:8,setter:function(t,e){return r=>{t.uniform2uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC3]:{Type:Uint32Array,size:12,setter:function(t,e){return r=>{t.uniform3uiv(e,r)}}},[u.d.UNSIGNED_INT_VEC4]:{Type:Uint32Array,size:16,setter:function(t,e){return r=>{t.uniform4uiv(e,r)}}},[u.d.BOOL]:{Type:Uint32Array,size:4,setter:h,arraySetter:E},[u.d.BOOL_VEC2]:{Type:Uint32Array,size:8,setter:T},[u.d.BOOL_VEC3]:{Type:Uint32Array,size:12,setter:A},[u.d.BOOL_VEC4]:{Type:Uint32Array,size:16,setter:R},[u.d.FLOAT_MAT2]:{Type:Float32Array,size:16,setter:function(t,e){return r=>{t.uniformMatrix2fv(e,!1,r)}}},[u.d.FLOAT_MAT3]:{Type:Float32Array,size:36,setter:function(t,e){return r=>{t.uniformMatrix3fv(e,!1,r)}}},[u.d.FLOAT_MAT4]:{Type:Float32Array,size:64,setter:function(t,e){return r=>{t.uniformMatrix4fv(e,!1,r)}}},[u.d.FLOAT_MAT2X3]:{Type:Float32Array,size:24,setter:function(t,e){return r=>{t.uniformMatrix2x3fv(e,!1,r)}}},[u.d.FLOAT_MAT2X4]:{Type:Float32Array,size:32,setter:function(t,e){return r=>{t.uniformMatrix2x4fv(e,!1,r)}}},[u.d.FLOAT_MAT3X2]:{Type:Float32Array,size:24,setter:function(t,e){return r=>{t.uniformMatrix3x2fv(e,!1,r)}}},[u.d.FLOAT_MAT3X4]:{Type:Float32Array,size:48,setter:function(t,e){return r=>{t.uniformMatrix3x4fv(e,!1,r)}}},[u.d.FLOAT_MAT4X2]:{Type:Float32Array,size:32,setter:function(t,e){return r=>{t.uniformMatrix4x2fv(e,!1,r)}}},[u.d.FLOAT_MAT4X3]:{Type:Float32Array,size:48,setter:function(t,e){return r=>{t.uniformMatrix4x3fv(e,!1,r)}}},[u.d.SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D},[u.d.SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_3D},[u.d.SAMPLER_2D_SHADOW]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D},[u.d.SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.SAMPLER_2D_ARRAY_SHADOW]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.SAMPLER_CUBE_SHADOW]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.INT_SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D},[u.d.INT_SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_3D},[u.d.INT_SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D_ARRAY},[u.d.UNSIGNED_INT_SAMPLER_2D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D},[u.d.UNSIGNED_INT_SAMPLER_3D]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_3D},[u.d.UNSIGNED_INT_SAMPLER_CUBE]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_CUBE_MAP},[u.d.UNSIGNED_INT_SAMPLER_2D_ARRAY]:{Type:null,size:0,setter:m,arraySetter:F,bindPoint:u.d.TEXTURE_2D_ARRAY}};function g(t,e,r){return n=>{t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,r.itemSize,u.d.FLOAT,n.normalize||!1,n.stride||0,n.offset||0)}}function p(t,e,r){return n=>{t.bindBuffer(t.ARRAY_BUFFER,n.buffer),t.enableVertexAttribArray(e),t.vertexAttribIPointer(e,r.itemSize,u.d.INT,n.stride||0,n.offset||0)}}function b(t,e,r){const n=r.size,i=r.count;return r=>{t.bindBuffer(t.ARRAY_BUFFER,r.buffer);const s=n,a=s/i,o=S[u.d.FLOAT].size*s,f=r.normalize||!1,c=r.offset||0,d=o/i;for(let r=0;r<i;++r)t.enableVertexAttribArray(e+r),t.vertexAttribPointer(e+r,a,u.d.FLOAT,f,o,c+d*r)}}const N={[u.d.FLOAT]:{size:4,setter:g,itemSize:1},[u.d.FLOAT_VEC2]:{size:8,setter:g,itemSize:2},[u.d.FLOAT_VEC3]:{size:12,setter:g,itemSize:3},[u.d.FLOAT_VEC4]:{size:16,setter:g,itemSize:4},[u.d.INT]:{size:4,setter:p,itemSize:1},[u.d.INT_VEC2]:{size:8,setter:p,itemSize:2},[u.d.INT_VEC3]:{size:12,setter:p,itemSize:3},[u.d.INT_VEC4]:{size:16,setter:p,itemSize:4},[u.d.UNSIGNED_INT]:{size:4,setter:p,itemSize:1},[u.d.UNSIGNED_INT_VEC2]:{size:8,setter:p,itemSize:2},[u.d.UNSIGNED_INT_VEC3]:{size:12,setter:p,itemSize:3},[u.d.UNSIGNED_INT_VEC4]:{size:16,setter:p,itemSize:4},[u.d.BOOL]:{size:4,setter:p,itemSize:1},[u.d.BOOL_VEC2]:{size:8,setter:p,itemSize:2},[u.d.BOOL_VEC3]:{size:12,setter:p,itemSize:3},[u.d.BOOL_VEC4]:{size:16,setter:p,itemSize:4},[u.d.FLOAT_MAT2]:{size:4,setter:b,count:2},[u.d.FLOAT_MAT3]:{size:9,setter:b,count:3},[u.d.FLOAT_MAT4]:{size:16,setter:b,count:4}};u.d.BYTE,Int8Array,u.d.UNSIGNED_BYTE,Uint8Array,u.d.SHORT,Int16Array,u.d.UNSIGNED_SHORT,Uint16Array,u.d.INT,Int32Array,u.d.UNSIGNED_INT,Uint32Array,u.d.FLOAT,Float32Array,u.d.UNSIGNED_SHORT_4_4_4_4,Uint16Array,u.d.UNSIGNED_SHORT_5_5_5_1,Uint16Array,u.d.UNSIGNED_SHORT_5_6_5,Uint16Array,u.d.HALF_FLOAT,Uint16Array,u.d.UNSIGNED_INT_2_10_10_10_REV,Uint32Array,u.d.UNSIGNED_INT_10F_11F_11F_REV,Uint32Array,u.d.UNSIGNED_INT_5_9_9_9_REV,Uint32Array,u.d.FLOAT_32_UNSIGNED_INT_24_8_REV,Uint32Array,u.d.UNSIGNED_INT_24_8,Uint32Array;function y(t,e){if(e.enable)for(const r of e.enable)t.enable(r);if(e.disable)for(const r of e.disable)t.disable(r);e.blendFunc&&t.blendFunc.apply(t,e.blendFunc),null!=e.depthFunc&&t.depthFunc(e.depthFunc),null!=e.cullFace&&t.cullFace(e.cullFace),null!=e.frontFace&&t.frontFace(e.frontFace),null!=e.lineWidth&&t.lineWidth(e.lineWidth),e.colorMask&&t.colorMask.apply(t,e.colorMask),null!=e.depthMask&&t.depthMask(e.depthMask),e.clearColor&&t.clearColor.apply(t,e.clearColor),null!=e.clearDepth&&t.clearDepth(e.clearDepth),null!=e.clearBits&&t.clear(e.clearBits)}function I(t,e){if(e.enable)for(const r of e.enable)t.disable(r);if(e.disable)for(const r of e.disable)t.enable(r)}let U=1;class L{constructor(t,e="Form"+U++){this._painter=t,this.id=e}update(t){const e=this._painter.gl;t.drawType&&(this._drawType=e[t.drawType]),t.itemCount&&(this._itemCount=t.itemCount),this._attribs=this._attribs||{};for(const r in t.attribs){const n=t.attribs[r];null==this._attribs[r]&&(this._attribs[r]={buffer:e.createBuffer()}),e.bindBuffer(e.ARRAY_BUFFER,this._attribs[r].buffer),e.bufferData(e.ARRAY_BUFFER,n.buffer,e[(n.storeType||"STATIC")+"_DRAW"])}if(t.elements){const r=t.elements.buffer;null==this._elements&&(this._elements={buffer:e.createBuffer(),glType:null}),this._elements.glType=function(t){if(t instanceof Int8Array)return u.d.BYTE;if(t instanceof Uint8Array)return u.d.UNSIGNED_BYTE;if(t instanceof Uint8ClampedArray)return u.d.UNSIGNED_BYTE;if(t instanceof Int16Array)return u.d.SHORT;if(t instanceof Uint16Array)return u.d.UNSIGNED_SHORT;if(t instanceof Int32Array)return u.d.INT;if(t instanceof Uint32Array)return u.d.UNSIGNED_INT;if(t instanceof Float32Array)return u.d.FLOAT;throw new Error("unsupported typed array type")}(r),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._elements.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e[(t.elements.storeType||"STATIC")+"_DRAW"])}return this}destroy(){const t=this._painter.gl;for(const e in this._attribs)t.deleteBuffer(this._attribs[e].buffer);this._attribs={},this._elements&&(t.deleteBuffer(this._elements.buffer),this._elements=void 0)}}var D=r(3),M=r(12);let O=1;class v{constructor(t,e="Texture"+O++){this._painter=t,this.id=e,this._texture=null,this._data={}}update(t){const e=this._painter.gl;if(null==this._texture&&(this._texture=e.createTexture()),e.bindTexture(e.TEXTURE_2D,this._texture),t.wrap&&t.wrap!==this._data.wrap||t.wrapS&&t.wrapS!==this._data.wrapS||t.wrapT&&t.wrapT!==this._data.wrapT){let r,n;t.wrap?r=n=t.wrap:(n=t.wrapT||o,r=t.wrapS||o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e[r]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e[n])}else this._data.wrap||this._data.wrapS||this._data.wrapT||(this._data.wrap=this._data.wrapT=this._data.wrapS=o,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e[this._data.wrap]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e[this._data.wrap]));return t.magFilter&&t.magFilter!==this._data.magFilter?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[t.magFilter]):this._data.magFilter||(this._data.magFilter=c,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[this._data.magFilter])),t.minFilter&&t.minFilter!==this._data.minFilter?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[t.minFilter]):this._data.minFilter||(this._data.minFilter=f,e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[this._data.minFilter])),t.asset&&e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.asset),void 0!==t.data&&e.texImage2D(e.TEXTURE_2D,0,"FLOAT"===t.type&&this._painter.isWebGL2?e.RGBA32F:e.RGBA,t.width,t.height,0,e.RGBA,e[t.type||"UNSIGNED_BYTE"],t.data),null!=t.flipY&&t.flipY!==this._data.flipY&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t.flipY),t.minFilter&&t.minFilter.indexOf("MIPMAP")>0&&e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),Object.assign(this._data,t),this}destroy(){this._painter.gl.deleteTexture(this._texture),this._data={},this._texture=null}}let B=1;class P{constructor(t,e="Form"+B++){this._painter=t,this.id=e,this.width=0,this.height=0,this.antialias=!1,this.frameBuffer=null,this.antiAliasFrameBuffer=null,this.antiAliasRenderBuffer=null,this.textures=[],this.depthBuffer=null,this.bufferStructure=[],this._data={}}update(t){var e;const r=this._painter.gl,n=t.width||this.width,i=t.height||this.height;if(!n||!i)return this;if(n===this.width&&i===this.height){if(!t.bufferStructure)return this;if(t.bufferStructure.length===this.bufferStructure.length&&this.bufferStructure.every((e,r)=>Object(M.b)(e,t.bufferStructure[r])))return this}null==this.frameBuffer&&(this.frameBuffer=r.createFramebuffer()),null==this.depthBuffer&&(this.depthBuffer=r.createRenderbuffer()),t.bufferStructure&&t.bufferStructure.length&&(this.bufferStructure=t.bufferStructure,this.bufferStructure.some(t=>"FLOAT"===t.type)&&(this._painter.isWebGL2?r.getExtension("EXT_color_buffer_float"):r.getExtension("OES_texture_float")));const s=this.bufferStructure.length||1,a=[r.COLOR_ATTACHMENT0];if(r.bindFramebuffer(r.FRAMEBUFFER,this.frameBuffer),s>1){let t;this._painter.isWebGL2||(t=r.getExtension("WEBGL_draw_buffers"));const e=this._painter.isWebGL2?r.COLOR_ATTACHMENT0:t.COLOR_ATTACHMENT0_WEBGL;for(let t=0;t<s;t++)a[t]=e+t;this._painter.isWebGL2?r.drawBuffers(a):t.drawBuffersWEBGL(a)}if(this.antialias=1===s&&this._painter.isWebGL2&&(t.antialias||(null===(e=this._data)||void 0===e?void 0:e.antialias)),this.antialias){const t=r;null==this.antiAliasFrameBuffer&&(this.antiAliasFrameBuffer=r.createFramebuffer()),null==this.antiAliasRenderBuffer&&(this.antiAliasRenderBuffer=r.createRenderbuffer()),r.bindFramebuffer(r.FRAMEBUFFER,this.antiAliasFrameBuffer),r.bindRenderbuffer(r.RENDERBUFFER,this.antiAliasRenderBuffer),t.renderbufferStorageMultisample(r.RENDERBUFFER,Math.min(4,r.getParameter(t.MAX_SAMPLES)),t.RGBA8,n,i),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,this.antiAliasRenderBuffer),r.bindRenderbuffer(r.RENDERBUFFER,this.depthBuffer),t.renderbufferStorageMultisample(r.RENDERBUFFER,Math.min(4,r.getParameter(t.MAX_SAMPLES)),r.DEPTH_COMPONENT16,n,i),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,this.depthBuffer),r.bindFramebuffer(r.FRAMEBUFFER,this.frameBuffer)}else r.bindRenderbuffer(r.RENDERBUFFER,this.depthBuffer),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,n,i),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,this.depthBuffer);for(let t=0;t<s;t++){this.textures[t]||(this.textures[t]=new v(this._painter,this.id+"_Texture"+t));const e=this.textures[t];e.update(Object.assign(Object.assign({minFilter:"NEAREST",magFilter:"NEAREST"},this.bufferStructure[t]),{data:null,width:n,height:i})),r.framebufferTexture2D(r.FRAMEBUFFER,a[t],r.TEXTURE_2D,e._texture,0)}if(this.antialias){r.bindFramebuffer(r.FRAMEBUFFER,this.antiAliasFrameBuffer);const e=r.checkFramebufferStatus(r.FRAMEBUFFER);e!==r.FRAMEBUFFER_COMPLETE&&console.error("antialias framebuffer error",e,t),r.bindFramebuffer(r.FRAMEBUFFER,this.frameBuffer)}const u=r.checkFramebufferStatus(r.FRAMEBUFFER);return u!==r.FRAMEBUFFER_COMPLETE&&console.error("framebuffer error",u,t),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindTexture(r.TEXTURE_2D,null),r.bindRenderbuffer(r.RENDERBUFFER,null),Object.assign(this._data,t),this.width=n,this.height=i,this}destroy(){const t=this._painter.gl;t.deleteFramebuffer(this.frameBuffer),t.deleteRenderbuffer(this.depthBuffer);for(const e of this.textures)t.deleteTexture(e);this.antiAliasFrameBuffer&&t.deleteFramebuffer(this.antiAliasFrameBuffer),this.antiAliasRenderBuffer&&t.deleteRenderbuffer(this.antiAliasRenderBuffer),this.textures=[],this.frameBuffer=null,this.depthBuffer=null,this._data={},this.bufferStructure=[],this.width=0,this.height=0}}let C=1;class x{constructor(t,e="Frame"+C++){this._painter=t,this.id=e,this.width=0,this.height=0,this.layers=[],this._data={},this._targets=[],this._textures=[]}image(t=0){return this._targets.length&&this._targets[this._targets.length-1].textures[t]||this._textures[t]}update(t={}){var e,r,n,i;const s=this._painter.gl,a=Array.isArray(t.layers)?t.layers:t.layers?[t.layers]:this.layers,u=t.selfReferencing||this._data.selfReferencing,o=a.reduce((t,e)=>t+(e._uniforms.length||1),0),f=u||o>1?2:o,c=t.width||(null===(e=t.texture)||void 0===e?void 0:e.width)||this._data.width||(null===(r=this._data.texture)||void 0===r?void 0:r.width)||s.drawingBufferWidth,d=t.height||(null===(n=t.texture)||void 0===n?void 0:n.height)||this._data.height||(null===(i=this._data.texture)||void 0===i?void 0:i.height)||s.drawingBufferHeight,_=t.antialias||this._data.antialias||!0;f!==this._targets.length&&this._destroyTargets();const l=Object.assign(Object.assign({},t),{width:c,height:d,antialias:_});return!this._targets.length&&f>0?this._targets=Object(D.j)(t=>new P(this._painter,this.id+"_target"+(t+1)).update(l),f):this._targets.length&&this._targets.forEach(t=>{t.update(l)}),t.texture&&(this._textures[0]||(this._textures[0]=new v(this._painter,this.id+"_Texture0")),t.texture.width=c,t.texture.height=d,this._textures[0].update(t.texture)),Object.assign(this._data,t),this.layers=a,this.width=c,this.height=d,this}destroy(){this._destroyTargets(),this._textures.forEach(t=>t.destroy()),this._textures=[],this._data={},this.layers=[],this.width=0,this.height=0}_destroyTargets(){this._targets.forEach(t=>t.destroy()),this._targets=[]}_swapTargets(){if(this._targets.length>1){const t=this._targets[0];this._targets[0]=this._targets[1],this._targets[1]=t}}}let w=1;class G{constructor(t="DrawingLayer"+w++){this.id=t,this.sketches=[],this._data={},this._uniforms=[]}update(t){if(t.sketches&&(this.sketches=Array.isArray(t.sketches)?t.sketches:[t.sketches]),t.frag){const e=this.sketches&&this.sketches[0];e&&e.shade.update({frag:t.frag})}return t.uniforms&&(this._uniforms=Array.isArray(t.uniforms)?t.uniforms:[t.uniforms]),Object.assign(this._data,t),this}destroy(){for(const t of this.sketches)t.destroy();this._data.sketches=[],this._data={},this._uniforms=[]}}let z=1;class X{constructor(t,e="Shade"+z++){this._painter=t,this.id=e}update(t){const e=this._painter.gl,r=t.frag&&t.frag.trim()||this.fragSource,n=t.vert&&t.vert.trim()||this.vertSource;if(!r||!n||r===this.fragSource&&n===this.vertSource)return this;this.destroy(),r.indexOf("GL_EXT_draw_buffers")>=0&&e.getExtension("WEBGL_draw_buffers");const i=e.createProgram(),s=e.createShader(e.FRAGMENT_SHADER),a=e.createShader(e.VERTEX_SHADER);if(i&&a&&s){if(this._program=i,this._frag=s,this._vert=a,e.attachShader(i,a),e.attachShader(i,s),e.shaderSource(a,n),e.shaderSource(s,r),e.compileShader(a),e.compileShader(s),e.getShaderParameter(a,e.COMPILE_STATUS)||console.error("Error Compiling Vertex Shader!\n",e.getShaderInfoLog(a),H(n)),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("Error Compiling Fragment Shader!\n",e.getShaderInfoLog(s),H(r)),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const t=e.getProgramInfoLog(i);console.error("Error in program linking:",t)}return this._uniformSetters=function(t,e){let r=0;function n(e,n){const i=t.getUniformLocation(e,n.name),s=n.size>1&&"[0]"===n.name.substr(-3),a=n.type,u=S[a];if(!u)throw new Error("unknown type: 0x"+a.toString(16));if(null==i)return;let o;if(null===u.Type){const e=r;r+=n.size,o=s?u.arraySetter(t,a,e,i,n.size):u.setter(t,a,e,i)}else o=u.arraySetter&&s?u.arraySetter(t,i):u.setter(t,i);return{setter:o,location:i}}const i={},s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const s=t.getActiveUniform(e,r);if(!s)continue;let a=s.name;if("[0]"===a.substr(-3)&&(a=a.substr(0,a.length-3)),e){const t=n(e,s);t&&(i[a]=t)}}return i}(e,i),this._attributeSetters=function(t,e){const r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const n=t.getActiveAttrib(e,i);if(!n)break;const s=t.getAttribLocation(e,n.name),a=N[n.type],u=a.setter(t,s,a);r[n.name]={setter:u,location:s}}return r}(e,i),this.fragSource=r,this.vertSource=n,this}}destroy(){const t=this._painter.gl;t.deleteProgram(this._program),t.deleteShader(this._frag),t.deleteShader(this._vert),this.vertSource=void 0,this.fragSource=void 0,this._attributeSetters={},this._uniformSetters={}}}function H(t){return t.trim().split("\n").map((t,e)=>e+1+": "+t).join("\n")}let V=1;class Y{constructor(t="Sketch"+V++){this.id=t,this._uniforms=[]}update(t){return t.drawSettings&&(this._drawSettings=t.drawSettings),t.form&&(this.form=t.form),t.shade&&(this.shade=t.shade),t.uniforms&&(this._uniforms=Array.isArray(t.uniforms)?t.uniforms:[t.uniforms]),this}destroy(){this.form&&this.form.destroy(),this.shade&&this.shade.destroy(),this._drawSettings=void 0,this._uniforms=[]}}var k=r(14);class j{constructor(t,e={}){this.canvas=t,this.isWebGL2=!0,this.maxBufferSamples=0;let r=null;if(e.useWebGL1||(r=t.getContext("webgl2",e)||t.getContext("experimental-webgl2",e)),null==r&&(this.isWebGL2=!1,r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e)),null==r)throw Error("Cannot initialize WebGL.");this.gl=r,this.sizeMultiplier=e.sizeMultiplier||1,this.isWebGL2&&(this.maxBufferSamples=r.getParameter(r.MAX_SAMPLES)),this.resize(),y(r,function(t){return{clearColor:[0,0,0,1],blendFunc:[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA]}}(r)),this._renderQuad=this.createForm().update(d.renderQuad),this._staticSketch=this.createFlatSketch()}resize(){return Object(k.b)(this.gl.canvas,this.sizeMultiplier),this}destroy(){this._staticSketch.destroy(),this._renderQuad.destroy()}updateDrawSettings(t){return y(this.gl,Object.assign({},t)),this}createForm(t){return new L(this,t)}createShade(t){return new X(this,t)}createSketch(t){return new Y(t)}createFlatSketch(t){const e=this.createSketch(t);return e.update({form:this._renderQuad,shade:this.createShade(e.id+"_defaultShade").update(_.basicEffect)})}createFrame(t){return new x(this,t)}createLayer(t){return new G(t)}createEffect(t){const e=this.createLayer(t);return e.update({sketches:this.createFlatSketch(e.id+"_effectSketch")})}draw(t,e){const r=this.gl;return r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),W(r,t,e),this}compose(...t){for(const e of t)Z(this.gl,e);return this}display(t,e=0){return this.draw(this._staticSketch,{source:t.image(e)})}}function W(t,e,r,n){const{shade:i,form:s,_drawSettings:a,_uniforms:u}=e;if(!i||!s)throw Error("cannot draw, shader or geometry are not set");t.useProgram(i._program),function(t,e){for(const r in e._attribs){const n=t._attributeSetters[r];n&&n.setter(e._attribs[r])}}(i,s),r&&Q(i,r,n),a&&y(t,a);for(let r=0;r<(u.length||1);r++)K(t,e,u[r],n);a&&I(t,a)}function K(t,e,r,n){r&&Q(e.shade,r,n),e.form._elements&&null!=e.form._elements.glType?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.form._elements.buffer),t.drawElements(e.form._drawType,e.form._itemCount,e.form._elements.glType,0)):t.drawArrays(e.form._drawType,0,e.form._itemCount)}function Q(t,e,r){for(const n in e){const i=t._uniformSetters[n];if(i){let t=e[n];"function"==typeof t&&(t=t()),"string"==typeof t&&r?i.setter(r[t]):i.setter(t)}}}function $(t,e,r,n,i){n?(t.bindFramebuffer(t.FRAMEBUFFER,n.antialias?n.antiAliasFrameBuffer:n.frameBuffer),t.viewport(0,0,n.width,n.height)):(t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight)),e._data.drawSettings&&y(t,e._data.drawSettings);for(const n of e.sketches)W(t,n,r,i);if(n&&n.antialias){const e=t;t.bindFramebuffer(e.READ_FRAMEBUFFER,n.antiAliasFrameBuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,n.frameBuffer),e.clearBufferfv(e.COLOR,0,[1,1,1,1]),e.blitFramebuffer(0,0,n.width,n.height,0,0,n.width,n.height,t.COLOR_BUFFER_BIT,t.LINEAR)}e._data.drawSettings&&I(t,e._data.drawSettings)}function Z(t,e){for(let r=0;r<e.layers.length;r++){const n=e.layers[r],i=n._uniforms.length||1;for(let s=0;s<i;s++){const i=e._targets[0],a=r+s===0&&e._textures.length?e._textures:e._targets[1]&&e._targets[1].textures;$(t,n,n._uniforms[s],i,a),e._swapTargets()}}}var q=r(11);let J,tt;function et(t,e){return function(t,e){t!==J&&(J=t,tt=new j(t,e),ht.device.canvas=t,gt&&gt(),pt&&pt(),bt&&bt(),gt=i(()=>Object(n.a)(()=>{tt.sizeMultiplier=ht.device.sizeMultiplier,tt.resize(),Ft(St.RESIZE)},"resize")),pt=Object(q.b)({element:t,enableRightButton:!0,holdRadius:7,holdDelay:250},t=>ht.device.pointer=t),bt=Object(s.b)(t=>ht.device.keys=t))}(t,e),tt}const rt={};function nt(t,e){return rt[e]||(rt[e]=t.createForm("Form_"+e))}const it={};function st(t,e){return it[e]||(it[e]=t.createShade("Shade_"+e))}const at={};function ut(t,e){return at[e]||(at[e]=t.createSketch("Sketch_"+e))}const ot={};function ft(t,e){return ot[e]||(ot[e]=t.createLayer("Layer_"+e))}const ct={};function dt(t,e){return ct[e]||(ct[e]=t.createFrame("Frame_"+e))}const _t={};function lt(t,e){return _t[e]||(_t[e]=t.createEffect("Effect_"+e))}const ht={device:{tpf:0,sizeMultiplier:1}};function Et(t){return ht[t]}function Tt(t,e,r){const n=ht;if(n[t]){const i=r&&r.reset;!0!==i&&(e=Object(a.a)(e,n[t],{ignore:i}))}n[t]=e}function At(){return ht}window.state=ht;const Rt={};function mt(t,e){Rt[t]=e}function Ft(t){for(const e in Rt)Rt[e](t,ht)}const St={FRAME:"frame",RESIZE:"resize"};let gt,pt,bt},10:function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d}));let n=null;const i={};let s=!1,a=0,u=0;function o(t){const e=u?t-u:u;if(u=t,n){for(const t in n)n[t](e);n=null}let r=0;for(const t in i)r++,i[t](e);r?requestAnimationFrame(o):(s=!1,u=0)}function f(t,e){e=e||t.name||a++,n=n||{},n[e]=t,s||(requestAnimationFrame(o),s=!0)}function c(t,e){return e=e||t.name||a++,i[e]=t,s||(requestAnimationFrame(o),s=!0),e}function d(t){"function"==typeof t&&(t=t.name),delete i[t]}},11:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));const n={LEFT:0,MIDDLE:1,RIGHT:2};function i(t,e){const r=e||t,{element:i=document,enableRightButton:s,holdDelay:a=400,holdRadius:u=5}=t,o={pressed:{},drag:{x:0,y:0,dX:0,dY:0,xMax:0,yMax:0},dragging:!1,holding:!1};let f=0,c=0,d=0,_=0,l=null;function h(t){t.isPrimary?(o.pressed[t.button]=t,f=d=t.clientX,c=_=t.clientY,o.dragging=!0,null!=l&&clearTimeout(l),l=setTimeout(()=>{o.drag.xMax<u&&o.drag.yMax<u&&(o.holding=!0,r(o))},a)):o.pressed[n.RIGHT]=t,r(o)}function E(t){o.pressed={},delete o.drag.event,o.drag.x=0,o.drag.y=0,o.drag.dX=0,o.drag.dY=0,o.drag.xMax=0,o.drag.yMax=0,o.dragging=!1,o.holding=!1,null!=l&&clearTimeout(l),l=null,r(o)}function T(t){o.dragging&&t.isPrimary&&(o.drag.event=t,o.drag.x=f-t.clientX,o.drag.y=c-t.clientY,o.drag.dX=d-t.clientX,o.drag.dY=_-t.clientY,o.drag.xMax=Math.max(Math.abs(o.drag.x),o.drag.xMax),o.drag.yMax=Math.max(Math.abs(o.drag.y),o.drag.yMax),d=t.clientX,_=t.clientY,r(o))}function A(t){t.preventDefault()}return i.addEventListener("pointerdown",h),document.addEventListener("pointermove",T),document.addEventListener("pointerup",E),document.addEventListener("pointerleave",E),document.addEventListener("pointercancel",E),s&&i.addEventListener("contextmenu",A),r(o),function(){i.removeEventListener("pointerdown",h),document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",E),document.removeEventListener("pointerleave",E),document.removeEventListener("pointercancel",E),s&&i.removeEventListener("contextmenu",A)}}},12:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));function n(t,e){if(t===e)return!0;if(!e||!t)return!1;if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function i(t,e){if(t===e)return!0;if(!e)return!1;const r=Object.keys(t);if(!n(r,Object.keys(e)))return!1;for(const n of r)if(t[n]!==e[n])return!1;return!0}},14:function(t,e,r){"use strict";function n(t,...e){return e.reduce((e,r)=>e|t[r.toUpperCase()+"_BUFFER_BIT"],0)}function i(t,e=1){let r=t.width,n=t.height;return"clientWidth"in t&&"clientHeight"in t&&(r=t.clientWidth*e|0,n=t.clientHeight*e|0),(t.width!==r||t.height!==n)&&(t.width=r,t.height=n,!0)}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}))},18:function(t,e,r){"use strict";function n(t,e,r){const i=r&&r.ignore;if("object"==typeof t&&"object"==typeof e&&!Array.isArray(t)&&!Array.isArray(e)&&t!==e){for(const r in t)if(t.hasOwnProperty(r)&&(!i||!(r in i)||!0!==i[r])){const s=t[r],a=e[r];void 0!==a&&(t[r]=n(s,a,{ignore:i&&i[r]}))}return t}return e}function i(t,e,r={}){for(const n in e)r[n]=t(e[n],n);return r}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}))},3:function(t,e,r){"use strict";r.d(e,"g",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"j",(function(){return a})),r.d(e,"h",(function(){return u})),r.d(e,"a",(function(){return o})),r.d(e,"k",(function(){return f})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return d})),r.d(e,"d",(function(){return _})),r.d(e,"i",(function(){return l})),r.d(e,"c",(function(){return h}));var n=r(8);function i(t){return t[Object(n.b)(t.length)]}function s(t,e){for(let r=0;r<e;r++)t(r)}function a(t,e,r=[]){for(let n=0;n<e;n++)r[n]=t(n);return r}function u(t,e){return a(()=>e,t)}function o(t,...e){return t.concat(...e)}function f(t,e,r,n=[]){const i=Math.min(e.length,r.length);for(let s=0;s<i;s++)n[s]=t(e[s],r[s]);return n}function c(t,e=[]){for(const r of t){const t=e.length;for(let n=0;n<r.length;n++)e[n+t]=r[n]}return e}function d(t,e,r=[]){return c(function(t,e,r=[]){for(let n=0;n<e.length;n++)r[n]=t(e[n],n);return r}(t,e,r))}const _=d;function l(t,e=[]){for(let r=0;r<t.length;r++)e[r]=t[t.length-1-r];return e}function h(t,e){for(const r in e)t(e[r],r)}},6:function(t,e,r){"use strict";var n;function i(t,e){const r=e||t,{element:n=window}=t,i={};function s(t){i[t.keyCode]=Date.now(),r(i)}function a(t){delete i[t.keyCode],r(i)}return n.addEventListener("keyup",a,!1),n.addEventListener("keydown",s,!1),r(i),function(){n.removeEventListener("keyup",a),n.removeEventListener("keydown",s)}}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i})),function(t){t[t.CANCEL=3]="CANCEL",t[t.HELP=6]="HELP",t[t.BACK_SPACE=8]="BACK_SPACE",t[t.TAB=9]="TAB",t[t.CLEAR=12]="CLEAR",t[t.RETURN=13]="RETURN",t[t.ENTER=14]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CONTROL=17]="CONTROL",t[t.ALT=18]="ALT",t[t.PAUSE=19]="PAUSE",t[t.CAPS_LOCK=20]="CAPS_LOCK",t[t.ESCAPE=27]="ESCAPE",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.PRINTSCREEN=44]="PRINTSCREEN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.DIGIT_0=48]="DIGIT_0",t[t.DIGIT_1=49]="DIGIT_1",t[t.DIGIT_2=50]="DIGIT_2",t[t.DIGIT_3=51]="DIGIT_3",t[t.DIGIT_4=52]="DIGIT_4",t[t.DIGIT_5=53]="DIGIT_5",t[t.DIGIT_6=54]="DIGIT_6",t[t.DIGIT_7=55]="DIGIT_7",t[t.DIGIT_8=56]="DIGIT_8",t[t.DIGIT_9=57]="DIGIT_9",t[t.SEMICOLON=59]="SEMICOLON",t[t.EQUALS=61]="EQUALS",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.CONTEXT_MENU=93]="CONTEXT_MENU",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.MULTIPLY=106]="MULTIPLY",t[t.ADD=107]="ADD",t[t.SEPARATOR=108]="SEPARATOR",t[t.SUBTRACT=109]="SUBTRACT",t[t.DECIMAL=110]="DECIMAL",t[t.DIVIDE=111]="DIVIDE",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.F13=124]="F13",t[t.F14=125]="F14",t[t.F15=126]="F15",t[t.F16=127]="F16",t[t.F17=128]="F17",t[t.F18=129]="F18",t[t.F19=130]="F19",t[t.F20=131]="F20",t[t.F21=132]="F21",t[t.F22=133]="F22",t[t.F23=134]="F23",t[t.F24=135]="F24",t[t.NUM_LOCK=144]="NUM_LOCK",t[t.SCROLL_LOCK=145]="SCROLL_LOCK",t[t.COMMA=188]="COMMA",t[t.PERIOD=190]="PERIOD",t[t.SLASH=191]="SLASH",t[t.BACK_QUOTE=192]="BACK_QUOTE",t[t.OPEN_BRACKET=219]="OPEN_BRACKET",t[t.BACK_SLASH=220]="BACK_SLASH",t[t.CLOSE_BRACKET=221]="CLOSE_BRACKET",t[t.QUOTE=222]="QUOTE",t[t.META=224]="META"}(n||(n={}))},71:function(t,e,r){t.exports=r(91)},8:function(t,e,r){"use strict";function n(t){return Math.floor(Math.random()*t)}function i(t,e){return n(e-t)+t}function s(){return(Math.random()+Math.random()+Math.random())/3}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return s}))},91:function(t,e,r){"use strict";r.r(e);var n=r(1),i=r(10);const s=document.getElementById("canvas"),a=document.getElementById("paint"),u=Object(n.i)(s),o=(u.gl,Object(n.l)(),Object.assign(Object.assign({},n.b),{PROCESS_PAINT:"process_paint",CLEANUP_PAINT:"cleanup_paint"}));const f=a.getContext("2d");if(!f)throw Error("unable to initialize 2d context");const c=f.getImageData(0,0,a.width,a.height);for(let t=0;t<c.data.length;t+=4)c.data[t]=Math.random()>.5?255:0,c.data[t+3]=255;f.putImageData(c,0,0),Object(n.a)("paint",(t,e)=>{t===o.CLEANUP_PAINT&&(f.fillStyle="black",f.fillRect(0,0,a.width,a.height));const r=e.device;if(t===o.PROCESS_PAINT&&r.pointer.dragging&&r.pointer.drag.event){const{clientX:t,clientY:e}=r.pointer.drag.event,n=Math.floor(t/window.innerWidth*a.width),i=Math.floor(e/window.innerHeight*a.height);f.fillStyle="white",f.fillRect(n,i,1,1)}});const d=Object(n.g)(u,"paint"),_=Object(n.e)(u,"layer").update({frag:"precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D paint;\nuniform sampler2D previous;\nuniform float size;\nvarying vec2 coords;\n\nint getCell(vec2 uv) {\n\tvec4 paintTex = texture2D(paint, uv);\n\tvec4 prevTex = texture2D(previous, uv);\n\tif (paintTex.r > 0.0 || prevTex.r > 0.0) {\n\t\treturn 1;\n\t} else {\n\t\treturn 0;\n\t}\n}\n\nvoid main() {\n\tfloat one = 1.0 / size;\n\tvec2 uvR = vec2(coords.x + one, coords.y);\n\tvec2 uvL = vec2(coords.x - one, coords.y);\n\tvec2 uvRT = vec2(coords.x + one, coords.y - one);\n\tvec2 uvLT = vec2(coords.x - one, coords.y - one);\n\tvec2 uvRB = vec2(coords.x + one, coords.y + one);\n\tvec2 uvLB = vec2(coords.x - one, coords.y + one);\n\tvec2 uvT = vec2(coords.x, coords.y - one);\n\tvec2 uvB = vec2(coords.x, coords.y + one);\n\n\tvec4 paintTex = texture2D(paint, coords);\n\tvec4 prevTex = texture2D(previous, coords);\n\n\tint cellL = getCell(uvL);\n\tint cellR = getCell(uvR);\n\tint cellT = getCell(uvT);\n\tint cellB = getCell(uvB);\n\tint cellTL = getCell(uvLT);\n\tint cellTR = getCell(uvRT);\n\tint cellBL = getCell(uvLB);\n\tint cellBR = getCell(uvRB);\n\n\tint neighbours = cellL + cellR + cellT + cellB + cellTL + cellTR + cellBL + cellBR;\n\n\tvec4 color = vec4(vec3(0.0), 1.0);\n\tif (neighbours == 3 || (neighbours == 2 && prevTex.r > 0.0) || paintTex.r > 0.0) {\n\t\tcolor = vec4(1.0, 1.0, 0.0, 1.0);\n\t}\n\n\tgl_FragColor = color;\n}\n",uniforms:{size:256,paint:()=>d.image(),previous:()=>"0"}}),l=Object(n.g)(u,"automaton").update({layers:_,width:256,height:256,selfReferencing:!0,bufferStructure:[{flipY:!0}]});Object(n.a)("renderer",t=>{t===o.FRAME&&d.update({texture:{asset:a}})}),Object(i.b)(t=>{Object(n.d)("device").tpf=t,Object(n.c)(o.PROCESS_PAINT),Object(n.c)(o.FRAME),u.compose(l).display(l),Object(n.c)(o.CLEANUP_PAINT)},"loop")}});
//# sourceMappingURL=main.js.map