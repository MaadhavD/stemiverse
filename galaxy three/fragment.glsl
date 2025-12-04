precision highp float;
precision highp int;
#define HIGH_PRECISION
#define SHADER_NAME ShaderMaterial





#define GLSLIFY 1
uniform sampler2D _MainTexture;
uniform vec3 _Color;
varying vec2 vUv;
varying vec3 vWPos;

uniform float _Opacity;
uniform float _CameraFadeout;
varying float vDistanceToPlanet;
varying float vDistanceToCamera;
// varying float vDistanceToMouse;

float saturate(float x)
{
  return clamp(x, 0.0, 1.0);
}
vec3 SRGBtoLinear(vec3 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec3(linOut);
}
vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

void main()
{
  vec2 uv = vUv*2.0-vec2(1.0);
  float strength = exp(-5.0*saturate(length(uv)));

  vec3 col = texture2D(_MainTexture, vUv).rgb;
//   col = SRGBtoLinear(col);

  // Modern blue/purple color enhancement - MUCH BRIGHTER
  vec3 modernBlue = vec3(0.29, 0.62, 1.0);  // #4a9eff
  vec3 modernPurple = vec3(0.48, 0.41, 0.93); // #7b68ee
  vec3 cyanAccent = vec3(0.0, 0.85, 1.0); // #00d9ff
  
  // Mix colors based on distance and create gradient effect
  float colorMix = smoothstep(0.0, 1.0, col.r);
  vec3 enhancedColor = mix(modernBlue, modernPurple, colorMix * 0.6);
  enhancedColor = mix(enhancedColor, cyanAccent, col.r * 0.3);
  
  // Apply base color with enhancement - MUCH BRIGHTER
  vec3 finalColor = mix(_Color, enhancedColor, 0.9);
  finalColor += enhancedColor * col.r * 1.2; // Increased glow effect
  
  // SIGNIFICANTLY Enhance brightness for visibility
  finalColor *= 3.5; // Increased from 1.2 to 3.5

  // Increase alpha for more presence
  float alpha = col.r * _Opacity * 1.5;
  gl_FragColor = vec4(finalColor, alpha);
  
  // Add stronger glow based on distance
  float glow = 1.0 - saturate(vDistanceToCamera * 0.05);
  gl_FragColor.rgb += enhancedColor * glow * 0.8; // Increased from 0.2
  gl_FragColor.a = alpha;
}

