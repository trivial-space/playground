precision mediump float;

uniform vec2 p1;
uniform vec2 p2;
uniform vec2 p3;
uniform vec2 size;
uniform sampler2D source;

varying vec2 coords;

void main() {
	vec2 v = p2 - p1;
	vec2 p = p3 - p1;
	bool left = v.x * p.y - v.y * p.x >= 0.0; // 2D Cross product
	bool light = dot((coords * size - p3), v) >= 0.0;
	vec4 color = vec4(1.0, coords, 0.41);
	if (!light) {
		color = vec4(0.0);
	}

	vec4 old = texture2D(source, coords);
	gl_FragColor = vec4(mix(color.rgb, old.rgb, 1.0 - color.a), max(old.a, color.a));
}

