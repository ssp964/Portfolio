uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec4 vcolor;
float PI = 3.141592653589793238;

void main() {
    // vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);

    gl_FragColor = vec4(1.,1.,1.0,1.);
    gl_FragColor = vcolor * 10.; // Brightens particles

}
