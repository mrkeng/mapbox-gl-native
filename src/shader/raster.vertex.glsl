uniform mat4 u_matrix;

attribute vec2 a_pos;

varying vec2 v_pos;

void main() {
    gl_Position = u_matrix * vec4(a_pos, 0, 1);
    v_pos = a_pos / 4096.0;
}