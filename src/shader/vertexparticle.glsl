uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying vec4 vcolor;
uniform sampler2D uPositions;
float PI = 3.141592653589793238;

void main() {
    vUv = uv;
    vec4 pos = texture2D(uPositions, uv);

    float angle = atan(pos.y, pos.x);

    vcolor = vec4(1.2 + 0.45*sin(angle+time*0.4));

    vec4 mvPosition = modelViewMatrix * vec4(pos.xyz, 1.);
    mvPosition.z -= 2.; // Move particles closer to the camera

    
    gl_PointSize = 6. * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}