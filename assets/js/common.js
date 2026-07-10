const Icons = {
    // Disney/Pixar 3D CGI style - standing anthropomorphic, oversized eyes, detailed fur, bright saturated colors
    hamster: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="hBody" cx="45%" cy="25%" r="70%"><stop offset="0%" stop-color="#FFE0B0"/><stop offset="30%" stop-color="#F8B860"/><stop offset="70%" stop-color="#E89830"/><stop offset="100%" stop-color="#C87020"/></radialGradient>
            <radialGradient id="hBelly" cx="45%" cy="20%" r="55%"><stop offset="0%" stop-color="#FFFEF8"/><stop offset="100%" stop-color="#FFE8C8"/></radialGradient>
            <radialGradient id="hEar" cx="35%" cy="25%" r="60%"><stop offset="0%" stop-color="#FFC8A0"/><stop offset="100%" stop-color="#E87850"/></radialGradient>
            <radialGradient id="hEye" cx="40%" cy="25%" r="55%"><stop offset="0%" stop-color="#3A2010"/><stop offset="100%" stop-color="#0A0400"/></radialGradient>
            <radialGradient id="hCheek" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#FFB8A8"/><stop offset="100%" stop-color="#FF9080"/></radialGradient>
        </defs>
        <ellipse cx="17" cy="32" rx="8" ry="10" fill="url(#hEar)" stroke="#B86030" stroke-width="1.8"/>
        <ellipse cx="53" cy="32" rx="8" ry="10" fill="url(#hEar)" stroke="#B86030" stroke-width="1.8"/>
        <ellipse cx="17" cy="34" rx="4" ry="6" fill="#FFD0B8" opacity="0.5"/>
        <ellipse cx="53" cy="34" rx="4" ry="6" fill="#FFD0B8" opacity="0.5"/>
        <rect x="22" y="28" width="26" height="34" rx="13" fill="url(#hBody)" stroke="#B86030" stroke-width="2.2"/>
        <ellipse cx="35" cy="48" rx="14" ry="12" fill="url(#hBelly)"/>
        <ellipse cx="28" cy="38" rx="9" ry="9" fill="url(#hEye)" stroke="#0A0400" stroke-width="1.2"/>
        <ellipse cx="42" cy="38" rx="9" ry="9" fill="url(#hEye)" stroke="#0A0400" stroke-width="1.2"/>
        <circle cx="26.5" cy="35.5" r="3" fill="white"/>
        <circle cx="40.5" cy="35.5" r="3" fill="white"/>
        <circle cx="29" cy="39.5" r="1.7" fill="white"/>
        <circle cx="43" cy="39.5" r="1.7" fill="white"/>
        <circle cx="25" cy="34" r="1.2" fill="white" opacity="0.7"/>
        <circle cx="39" cy="34" r="1.2" fill="white" opacity="0.7"/>
        <g transform="translate(21,32) scale(0.6)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700"/></g>
        <g transform="translate(35,32) scale(0.6)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700"/></g>
        <ellipse cx="35" cy="48" rx="5" ry="3.5" fill="#FF8880" stroke="#C05040" stroke-width="1"/>
        <circle cx="35" cy="46.5" r="2" fill="#FFCCBB"/>
        <path d="M30 52 Q35 57 40 52" stroke="#3D2010" stroke-width="2" stroke-linecap="round" fill="none"/>
        <circle cx="22" cy="48" r="6" fill="url(#hCheek)" opacity="0.8"/>
        <circle cx="48" cy="48" r="6" fill="url(#hCheek)" opacity="0.8"/>
        <ellipse cx="22" cy="14" rx="5" ry="6" fill="url(#hBody)" stroke="#B86030" stroke-width="1.3"/>
        <ellipse cx="48" cy="14" rx="5" ry="6" fill="url(#hBody)" stroke="#B86030" stroke-width="1.3"/>
        <circle cx="22" cy="16" r="2.5" fill="#FFCCAA" opacity="0.6"/>
        <circle cx="48" cy="16" r="2.5" fill="#FFCCAA" opacity="0.6"/>
        <ellipse cx="26" cy="58" rx="7" ry="4" fill="url(#hBody)" stroke="#B86030" stroke-width="1.5"/>
        <ellipse cx="44" cy="58" rx="7" ry="4" fill="url(#hBody)" stroke="#B86030" stroke-width="1.5"/>
        <circle cx="27" cy="60" r="2" fill="#FFD0C0" opacity="0.5"/>
        <circle cx="45" cy="60" r="2" fill="#FFD0C0" opacity="0.5"/>
    </svg>`,

    deer: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="deerBodyG" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#FFF8C0"/><stop offset="35%" stop-color="#F5CC60"/><stop offset="100%" stop-color="#C88810"/></radialGradient>
            <radialGradient id="deerBellyG" cx="40%" cy="25%" r="55%"><stop offset="0%" stop-color="#FFFEF8"/><stop offset="100%" stop-color="#FFE8B0"/></radialGradient>
            <radialGradient id="deerEyeG" cx="35%" cy="30%" r="55%"><stop offset="0%" stop-color="#4A3020"/><stop offset="100%" stop-color="#1A0800"/></radialGradient>
            <radialGradient id="deerNoseG" cx="40%" cy="30%" r="55%"><stop offset="0%" stop-color="#FF8080"/><stop offset="100%" stop-color="#C04040"/></radialGradient>
            <radialGradient id="deerAntlerG" cx="40%" cy="60%" r="55%"><stop offset="0%" stop-color="#D4A040"/><stop offset="100%" stop-color="#8B6010"/></radialGradient>
        </defs>
        <ellipse cx="30" cy="8" rx="5" ry="9" fill="url(#deerAntlerG)" stroke="#6B4808" stroke-width="1.5" transform="rotate(-8 30 8)"/>
        <ellipse cx="40" cy="8" rx="5" ry="9" fill="url(#deerAntlerG)" stroke="#6B4808" stroke-width="1.5" transform="rotate(8 40 8)"/>
        <circle cx="27" cy="2" r="2.5" fill="#D49818"/>
        <circle cx="34" cy="2" r="2.5" fill="#D49818"/>
        <circle cx="37" cy="2" r="2.5" fill="#D49818"/>
        <circle cx="44" cy="2" r="2.5" fill="#D49818"/>
        <ellipse cx="35" cy="38" rx="20" ry="18" fill="url(#deerBodyG)" stroke="#8B6010" stroke-width="2.2"/>
        <ellipse cx="35" cy="42" rx="14" ry="11" fill="url(#deerBellyG)"/>
        <ellipse cx="27" cy="32" rx="9" ry="8.5" fill="url(#deerEyeG)" stroke="#1A0800" stroke-width="1.2"/>
        <ellipse cx="43" cy="32" rx="9" ry="8.5" fill="url(#deerEyeG)" stroke="#1A0800" stroke-width="1.2"/>
        <circle cx="25.5" cy="29.5" r="2.8" fill="white"/>
        <circle cx="41.5" cy="29.5" r="2.8" fill="white"/>
        <circle cx="27.5" cy="33" r="1.5" fill="white"/>
        <circle cx="43.5" cy="33" r="1.5" fill="white"/>
        <circle cx="24" cy="28" r="1.1" fill="white" opacity="0.7"/>
        <circle cx="40" cy="28" r="1.1" fill="white" opacity="0.7"/>
        <g transform="translate(20,26) scale(0.65)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <g transform="translate(36,26) scale(0.65)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <ellipse cx="35" cy="42" rx="5.5" ry="3.5" fill="url(#deerNoseG)"/>
        <circle cx="35" cy="40.5" r="2" fill="#FFCCBB"/>
        <path d="M29 47 Q35 53 41 47" stroke="#3D2010" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <circle cx="20" cy="40" r="5.5" fill="#FFCCAA" opacity="0.7"/>
        <circle cx="50" cy="40" r="5.5" fill="#FFCCAA" opacity="0.7"/>
        <ellipse cx="18" cy="20" rx="5" ry="6" fill="url(#deerBodyG)" stroke="#8B6010" stroke-width="1.5"/>
        <ellipse cx="52" cy="20" rx="5" ry="6" fill="url(#deerBodyG)" stroke="#8B6010" stroke-width="1.5"/>
        <ellipse cx="26" cy="54" rx="8" ry="5" fill="url(#deerBodyG)" stroke="#8B6010" stroke-width="1.8"/>
        <ellipse cx="44" cy="54" rx="8" ry="5" fill="url(#deerBodyG)" stroke="#8B6010" stroke-width="1.8"/>
        <circle cx="35" cy="60" r="4" fill="#FFE8C0" opacity="0.6"/>
        <ellipse cx="15" cy="22" rx="4" ry="3" fill="#FFFFFF" opacity="0.4"/>
        <ellipse cx="55" cy="22" rx="4" ry="3" fill="#FFFFFF" opacity="0.4"/>
    </svg>`,

    rabbit: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="rabBodyG" cx="40%" cy="30%" r="65%"><stop offset="0%" stop-color="#FEFCF8"/><stop offset="40%" stop-color="#F0E8E0"/><stop offset="100%" stop-color="#D0C0B0"/></radialGradient>
            <radialGradient id="rabBellyG" cx="40%" cy="25%" r="55%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#F8F0E8"/></radialGradient>
            <radialGradient id="rabEarInG" cx="40%" cy="30%" r="55%"><stop offset="0%" stop-color="#FFB8C0"/><stop offset="100%" stop-color="#E87080"/></radialGradient>
            <radialGradient id="rabEyeG" cx="35%" cy="30%" r="55%"><stop offset="0%" stop-color="#4A3030"/><stop offset="100%" stop-color="#1A0800"/></radialGradient>
            <radialGradient id="rabNoseG" cx="40%" cy="30%" r="55%"><stop offset="0%" stop-color="#FF9098"/><stop offset="100%" stop-color="#D05058"/></radialGradient>
        </defs>
        <ellipse cx="22" cy="10" rx="8" ry="18" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="2"/>
        <ellipse cx="48" cy="10" rx="8" ry="18" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="2"/>
        <ellipse cx="22" cy="12" rx="5" ry="14" fill="url(#rabEarInG)" stroke="#C87080" stroke-width="1.5"/>
        <ellipse cx="48" cy="12" rx="5" ry="14" fill="url(#rabEarInG)" stroke="#C87080" stroke-width="1.5"/>
        <ellipse cx="35" cy="38" rx="20" ry="18" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="2.2"/>
        <ellipse cx="35" cy="42" rx="14" ry="11" fill="url(#rabBellyG)"/>
        <ellipse cx="27" cy="32" rx="9" ry="8.5" fill="url(#rabEyeG)" stroke="#1A0800" stroke-width="1.2"/>
        <ellipse cx="43" cy="32" rx="9" ry="8.5" fill="url(#rabEyeG)" stroke="#1A0800" stroke-width="1.2"/>
        <circle cx="25.5" cy="29.5" r="2.8" fill="white"/>
        <circle cx="41.5" cy="29.5" r="2.8" fill="white"/>
        <circle cx="27.5" cy="33" r="1.5" fill="white"/>
        <circle cx="43.5" cy="33" r="1.5" fill="white"/>
        <circle cx="24" cy="28" r="1.1" fill="white" opacity="0.7"/>
        <circle cx="40" cy="28" r="1.1" fill="white" opacity="0.7"/>
        <g transform="translate(20,26) scale(0.65)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <g transform="translate(36,26) scale(0.65)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <ellipse cx="35" cy="42" rx="5.5" ry="3.5" fill="url(#rabNoseG)"/>
        <circle cx="35" cy="40.5" r="2" fill="#FFCCCC"/>
        <path d="M29 47 Q35 53 41 47" stroke="#3D2010" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <circle cx="20" cy="40" r="5.5" fill="#FFD0D8" opacity="0.7"/>
        <circle cx="50" cy="40" r="5.5" fill="#FFD0D8" opacity="0.7"/>
        <ellipse cx="18" cy="20" rx="5" ry="6" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="1.5"/>
        <ellipse cx="52" cy="20" rx="5" ry="6" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="1.5"/>
        <ellipse cx="26" cy="54" rx="8" ry="5" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="1.8"/>
        <ellipse cx="44" cy="54" rx="8" ry="5" fill="url(#rabBodyG)" stroke="#B0A090" stroke-width="1.8"/>
        <ellipse cx="35" cy="60" rx="8" ry="5" fill="#FFFFFF" stroke="#D0C0B0" stroke-width="1.5"/>
        <circle cx="35" cy="59" r="3" fill="#F0E8E0" opacity="0.5"/>
        <path d="M35 18 Q40 8 43 4" stroke="#B0A090" stroke-width="1.5" fill="none" opacity="0.4"/>
        <path d="M35 18 Q30 8 27 4" stroke="#B0A090" stroke-width="1.5" fill="none" opacity="0.4"/>
    </svg>`,

    butterfly: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="bfBody" cx="40%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFC0A0"/><stop offset="40%" stop-color="#F08860"/><stop offset="100%" stop-color="#C05030"/></radialGradient>
            <radialGradient id="bfWingUL" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFB088"/><stop offset="40%" stop-color="#FF7050"/><stop offset="100%" stop-color="#D04028"/></radialGradient>
            <radialGradient id="bfWingLL" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE888"/><stop offset="40%" stop-color="#FFC830"/><stop offset="100%" stop-color="#D09820"/></radialGradient>
            <radialGradient id="bfEye" cx="35%" cy="30%" r="55%"><stop offset="0%" stop-color="#4A3020"/><stop offset="100%" stop-color="#1A0800"/></radialGradient>
        </defs>
        <ellipse cx="22" cy="18" rx="20" ry="18" fill="url(#bfWingUL)" stroke="#A02818" stroke-width="2" transform="rotate(-10 22 18)"/>
        <ellipse cx="48" cy="18" rx="20" ry="18" fill="url(#bfWingUL)" stroke="#A02818" stroke-width="2" transform="rotate(10 48 18)"/>
        <ellipse cx="24" cy="40" rx="16" ry="14" fill="url(#bfWingLL)" stroke="#A08018" stroke-width="2" transform="rotate(-6 24 40)"/>
        <ellipse cx="46" cy="40" rx="16" ry="14" fill="url(#bfWingLL)" stroke="#A08018" stroke-width="2" transform="rotate(6 46 40)"/>
        <circle cx="18" cy="14" r="8" fill="#FFFFFF" opacity="0.5" transform="rotate(-10 18 14)"/>
        <circle cx="52" cy="14" r="8" fill="#FFFFFF" opacity="0.5" transform="rotate(10 52 14)"/>
        <circle cx="28" cy="24" r="6" fill="#FFFFFF" opacity="0.4" transform="rotate(-10 28 24)"/>
        <circle cx="42" cy="24" r="6" fill="#FFFFFF" opacity="0.4" transform="rotate(10 42 24)"/>
        <circle cx="22" cy="36" r="5" fill="#FFF8E0" opacity="0.5" transform="rotate(-6 22 36)"/>
        <circle cx="48" cy="36" r="5" fill="#FFF8E0" opacity="0.5" transform="rotate(6 48 36)"/>
        <ellipse cx="35" cy="32" rx="9" ry="7.5" fill="url(#bfBody)" stroke="#A03018" stroke-width="2"/>
        <ellipse cx="35" cy="34" rx="6" ry="4" fill="#FFE0D0"/>
        <ellipse cx="32" cy="30" rx="3.5" ry="3.5" fill="url(#bfEye)" stroke="#1A0800" stroke-width="0.8"/>
        <ellipse cx="38" cy="30" rx="3.5" ry="3.5" fill="url(#bfEye)" stroke="#1A0800" stroke-width="0.8"/>
        <circle cx="31.2" cy="29.2" r="1.2" fill="white"/>
        <circle cx="37.2" cy="29.2" r="1.2" fill="white"/>
        <circle cx="32.5" cy="31" r="0.6" fill="white"/>
        <circle cx="38.5" cy="31" r="0.6" fill="white"/>
        <g transform="translate(29,26)"><polygon points="0,-3 1,-0.5 3,-0.5 1.5,0.5 2,3 0,1.5 -2,3 -1.5,0.5 -3,-0.5 -1,-0.5" fill="#FFD700" opacity="0.9"/></g>
        <g transform="translate(35,26)"><polygon points="0,-3 1,-0.5 3,-0.5 1.5,0.5 2,3 0,1.5 -2,3 -1.5,0.5 -3,-0.5 -1,-0.5" fill="#FFD700" opacity="0.9"/></g>
        <ellipse cx="35" cy="36" rx="3" ry="2" fill="#FF8080"/>
        <circle cx="35" cy="35" r="1" fill="#FFCCBB"/>
        <path d="M32 38 Q35 41 38 38" stroke="#3D2010" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <path d="M32 5 Q28 0 24 6" stroke="#A03018" stroke-width="2" fill="none"/>
        <path d="M38 5 Q42 0 46 6" stroke="#A03018" stroke-width="2" fill="none"/>
        <circle cx="23" cy="5" r="2.5" fill="#FFE0D0"/>
        <circle cx="47" cy="5" r="2.5" fill="#FFE0D0"/>
    </svg>`,

    dog: `<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="dogBody" cx="40%" cy="30%" r="60%"><stop offset="0%" stop-color="#FFE8C0"/><stop offset="40%" stop-color="#F0C870"/><stop offset="100%" stop-color="#C89030"/></radialGradient>
            <radialGradient id="dogBelly" cx="40%" cy="25%" r="55%"><stop offset="0%" stop-color="#FFFEF0"/><stop offset="100%" stop-color="#FFE8C0"/></radialGradient>
            <radialGradient id="dogEarIn" cx="40%" cy="30%" r="55%"><stop offset="0%" stop-color="#E8C080"/><stop offset="100%" stop-color="#B87830"/></radialGradient>
            <radialGradient id="dogEye" cx="35%" cy="30%" r="55%"><stop offset="0%" stop-color="#4A3020"/><stop offset="100%" stop-color="#1A0800"/></radialGradient>
            <radialGradient id="dogNose" cx="40%" cy="30%" r="55%"><stop offset="0%" stop-color="#FF8888"/><stop offset="100%" stop-color="#C04040"/></radialGradient>
        </defs>
        <ellipse cx="18" cy="15" rx="12" ry="14" fill="url(#dogBody)" stroke="#A06818" stroke-width="2"/>
        <ellipse cx="52" cy="15" rx="12" ry="14" fill="url(#dogBody)" stroke="#A06818" stroke-width="2"/>
        <ellipse cx="18" cy="17" rx="7" ry="9" fill="url(#dogEarIn)" stroke="#B87830" stroke-width="1.5"/>
        <ellipse cx="52" cy="17" rx="7" ry="9" fill="url(#dogEarIn)" stroke="#B87830" stroke-width="1.5"/>
        <ellipse cx="37" cy="44" rx="21" ry="19" fill="url(#dogBody)" stroke="#A06818" stroke-width="2"/>
        <ellipse cx="37" cy="48" rx="14" ry="10" fill="url(#dogBelly)"/>
        <ellipse cx="29" cy="38" rx="8" ry="7.5" fill="url(#dogEye)" stroke="#1A0800" stroke-width="1"/>
        <ellipse cx="45" cy="38" rx="8" ry="7.5" fill="url(#dogEye)" stroke="#1A0800" stroke-width="1"/>
        <circle cx="27.5" cy="36.5" r="2.5" fill="white"/>
        <circle cx="43.5" cy="36.5" r="2.5" fill="white"/>
        <circle cx="29.5" cy="39" r="1.3" fill="white"/>
        <circle cx="45.5" cy="39" r="1.3" fill="white"/>
        <circle cx="26" cy="35" r="1" fill="white" opacity="0.7"/>
        <circle cx="42" cy="35" r="1" fill="white" opacity="0.7"/>
        <g transform="translate(23,32)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <g transform="translate(39,32)"><polygon points="0,-4 1.2,-1 4,-1 2,1 2.5,4 0,2 -2.5,4 -2,1 -4,-1 -1.2,-1" fill="#FFD700" opacity="0.9"/></g>
        <ellipse cx="37" cy="48" rx="5.5" ry="3.5" fill="url(#dogNose)"/>
        <circle cx="37" cy="47" r="2" fill="#FFCCBB"/>
        <path d="M31 52 Q37 56 43 52" stroke="#3D2010" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="37" cy="56" rx="7" ry="4" fill="#FF7070" stroke="#A04040" stroke-width="1.5"/>
        <circle cx="37" cy="55" r="2.5" fill="#FFAAAA"/>
        <path d="M37 58 L37 60" stroke="#A04040" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="22" cy="46" r="5" fill="#FFCCAA" opacity="0.7"/>
        <circle cx="52" cy="46" r="5" fill="#FFCCAA" opacity="0.7"/>
        <ellipse cx="16" cy="32" rx="5" ry="6" fill="url(#dogBody)" stroke="#A06818" stroke-width="1.5"/>
        <ellipse cx="58" cy="32" rx="5" ry="6" fill="url(#dogBody)" stroke="#A06818" stroke-width="1.5"/>
        <circle cx="16" cy="33" r="2.5" fill="#FFE8C0" opacity="0.6"/>
        <circle cx="58" cy="33" r="2.5" fill="#FFE8C0" opacity="0.6"/>
        <ellipse cx="26" cy="58" rx="7" ry="4.5" fill="url(#dogBody)" stroke="#A06818" stroke-width="1.5"/>
        <ellipse cx="48" cy="58" rx="7" ry="4.5" fill="url(#dogBody)" stroke="#A06818" stroke-width="1.5"/>
    </svg>`,

    paw: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="8" fill="#C9A7EB" stroke="#8B6BB8" stroke-width="2"/>
        <circle cx="7" cy="9" r="4.5" fill="#C9A7EB" stroke="#8B6BB8" stroke-width="1.5"/>
        <circle cx="23" cy="9" r="4.5" fill="#C9A7EB" stroke="#8B6BB8" stroke-width="1.5"/>
        <circle cx="7" cy="21" r="4.5" fill="#C9A7EB" stroke="#8B6BB8" stroke-width="1.5"/>
        <circle cx="23" cy="21" r="4.5" fill="#C9A7EB" stroke="#8B6BB8" stroke-width="1.5"/>
        <circle cx="15" cy="15" r="4" fill="#FFD0D3" stroke="#FFA0A5" stroke-width="1.5"/>
        <circle cx="6" cy="8" r="2" fill="#FFD0D3" opacity="0.7"/>
        <circle cx="24" cy="8" r="2" fill="#FFD0D3" opacity="0.7"/>
        <circle cx="6" cy="22" r="2" fill="#FFD0D3" opacity="0.7"/>
        <circle cx="24" cy="22" r="2" fill="#FFD0D3" opacity="0.7"/>
    </svg>`,

    tomato: `<svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="tomato-main" cx="30%" cy="30%" r="80%">
                <stop offset="0%" style="stop-color:#FFD4D4"/>
                <stop offset="30%" style="stop-color:#FFA0A0"/>
                <stop offset="60%" style="stop-color:#FF7A7A"/>
                <stop offset="100%" style="stop-color:#E55A5A"/>
            </radialGradient>
        </defs>
        <circle cx="15" cy="17" r="10" fill="url(#tomato-main)" stroke="#CC4444" stroke-width="1.5"/>
        <path d="M15 8 L13 2 L17 2 Z" fill="#B5EAD7"/>
        <path d="M12 3 L15 6 L18 3" stroke="#81C784" stroke-width="1.5" fill="none"/>
        <circle cx="15" cy="17" r="3" fill="#FFE4E6"/>
        <circle cx="17" cy="15" r="1.5" fill="#FFE4E6"/>
    </svg>`,

    play: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
    </svg>`,

    pause: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="6" height="18" rx="2" fill="currentColor"/>
        <rect x="13" y="3" width="6" height="18" rx="2" fill="currentColor"/>
    </svg>`,

    reset: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V6L8 10M12 3C7.58 3 4 6.58 4 11H7C7 7.69 9.69 5 13 5C14.76 5 16.34 5.74 17.57 6.97L15.41 9.13C14.41 8.42 13.21 8 12 8C9.24 8 7 10.24 7 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5V8L16 4L12 0V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    flag: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6L6 12L14 18V6Z" fill="#FF6B6B"/>
        <path d="M6 12H20" stroke="#3D334A" stroke-width="2"/>
        <path d="M20 12V20" stroke="#3D334A" stroke-width="2"/>
    </svg>`
};

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerCircle(circleId, progress, totalSeconds, isFocus = true) {
    const circle = document.getElementById(circleId);
    if (!circle) return;
    
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - (progress / totalSeconds) * circumference;
    
    const color = isFocus ? '#FF6B6B' : '#B5EAD7';
    circle.style.stroke = color;
}

function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = show ? 'flex' : 'none';
    }
}

function createButterfly(x, y, delay = 0) {
    const butterfly = document.createElement('div');
    butterfly.innerHTML = Icons.butterfly;
    butterfly.style.position = 'absolute';
    butterfly.style.left = x + 'px';
    butterfly.style.top = y + 'px';
    butterfly.style.width = '50px';
    butterfly.style.height = '50px';
    butterfly.style.animation = `butterfly-fly 6s ease-in-out ${delay}s infinite`;
    butterfly.style.pointerEvents = 'none';
    return butterfly;
}

function addButterflies(parentId, count = 5) {
    const parent = document.getElementById(parentId);
    if (!parent) return;
    
    for (let i = 0; i < count; i++) {
        const x = Math.random() * 300;
        const y = Math.random() * 200;
        const delay = Math.random() * 5;
        const butterfly = createButterfly(x, y, delay);
        parent.appendChild(butterfly);
    }
}

function createSparkles(parentId, count = 10) {
    const parent = document.getElementById(parentId);
    if (!parent) return;
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = `<svg viewBox="0 0 24 24" fill="#FFD700"><polygon points="12,2 15,10 24,10 17,16 20,24 12,19 4,24 7,16 0,10 9,10"/></svg>`;
        sparkle.style.position = 'absolute';
        sparkle.style.left = (Math.random() * 100) + '%';
        sparkle.style.top = (Math.random() * 100) + '%';
        sparkle.style.width = (Math.random() * 15 + 10) + 'px';
        sparkle.style.height = sparkle.style.width;
        sparkle.style.animation = `sparkle 1.5s ease-in-out ${Math.random() * 2}s infinite`;
        sparkle.style.pointerEvents = 'none';
        parent.appendChild(sparkle);
    }
}

function initTimer(containerId, duration = 25 * 60, onComplete = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let timeLeft = duration;
    let isRunning = false;
    let intervalId = null;
    
    const display = container.querySelector('.timer-display');
    const progressCircle = container.querySelector('.progress-circle');
    const hamster = container.querySelector('.hamster-container');
    
    function updateDisplay() {
        if (display) {
            display.textContent = formatTime(timeLeft);
        }
        
        if (progressCircle) {
            updateTimerCircle(progressCircle.id, duration - timeLeft, duration);
        }
    }
    
    function start() {
        if (isRunning) return;
        isRunning = true;
        if (hamster) {
            hamster.classList.remove('idle');
            hamster.classList.add('running');
        }
        
        intervalId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                stop();
                if (onComplete) onComplete();
            }
        }, 1000);
    }
    
    function pause() {
        isRunning = false;
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        if (hamster) {
            hamster.classList.remove('running');
            hamster.classList.add('idle');
        }
    }
    
    function stop() {
        pause();
        if (hamster) {
            hamster.classList.add('idle');
        }
    }
    
    function reset() {
        pause();
        timeLeft = duration;
        updateDisplay();
    }
    
    updateDisplay();
    
    return { start, pause, stop, reset, isRunning: () => isRunning };
}

function createNavItem(id, iconName, label, isActive = false) {
    return `
        <div class="nav-item ${isActive ? 'active' : ''}" onclick="switchPage('${id}')">
            ${Icons[iconName]}
            <span>${label}</span>
        </div>
    `;
}

function loadGlobalTheme() {
    const darkMode = localStorage.getItem('pomodoro_dark_mode');
    if (darkMode === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    const accent = localStorage.getItem('pomodoro_accent');
    if (accent && accent !== 'default') {
        document.documentElement.setAttribute('data-accent', accent);
    } else {
        document.documentElement.removeAttribute('data-accent');
    }
}

loadGlobalTheme();

window.addEventListener('storage', function(e) {
    if (e.key === 'pomodoro_dark_mode' || e.key === 'pomodoro_accent') {
        loadGlobalTheme();
    }
});

/**
 * 通用的页面跳转函数
 * @param {string} page - 目标页面路径
 */
function openPage(page) {
    window.location.href = page;
}

/**
 * 跳转到 ai-chat 页面
 */
function openAiChat() {
    window.location.href = 'ai-chat.html';
}

/**
 * 导航栏页面切换函数
 * 根据 pageId 跳转到对应页面
 * @param {string} pageId - 页面标识
 */
function switchPage(pageId) {
    const pageMap = {
        home: 'home.html',
        task: 'task-plan.html',
        taskplan: 'task-plan.html',
        dashboard: 'dashboard.html',
        settings: 'settings.html',
        'ai-chat': 'ai-chat.html',
        break: 'break-guide.html'
    };
    const page = pageMap[pageId] || pageId + '.html';
    window.location.href = page;
}

/**
 * 从 localStorage 读取头像 URL
 * @returns {string} 头像 URL 或默认小鹿 SVG
 */
function getUserAvatar() {
    const avatar = localStorage.getItem('pomodoro_avatar');
    return avatar || Icons.deer;
}

/**
 * 从 localStorage 读取用户名
 * @returns {string} 用户名或默认"宝宝"
 */
function getUserName() {
    const name = localStorage.getItem('pomodoro_name');
    return name || '宝宝';
}

/**
 * 从 localStorage 读取壁纸设置
 * @returns {Object} 壁纸样式对象（包含 backgroundImage 或 backgroundColor）
 */
function getUserWallpaper() {
    const wallpaper = localStorage.getItem('pomodoro_wallpaper');
    const wallpaperColor = localStorage.getItem('pomodoro_wallpaper_color');

    if (wallpaper) {
        return {
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
    } else if (wallpaperColor && wallpaperColor !== 'default') {
        return {
            backgroundColor: wallpaperColor
        };
    }
    return {};
}

/**
 * 从 localStorage 读取任务列表
 * @returns {Array} 任务列表，不存在时返回空数组
 */
function loadTasks() {
    const saved = localStorage.getItem('pomodoro_tasks');
    return saved ? JSON.parse(saved) : [];
}

/**
 * 保存任务列表到 localStorage
 * @param {Array} tasks - 任务列表
 */
function saveTasks(tasks) {
    localStorage.setItem('pomodoro_tasks', JSON.stringify(tasks));
}

/**
 * 显示 toast 提示消息（自动消失）
 * @param {string} message - 提示消息内容
 */
function showToast(message) {
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-wisteria);
        color: white;
        padding: 12px 24px;
        border-radius: 20px;
        font-family: var(--font-family-display);
        font-size: 14px;
        z-index: 300;
        box-shadow: 0 4px 16px rgba(201,167,235,0.4);
        animation: toast-in 0.3s ease-out;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast-out 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

/**
 * 返回今天的日期字符串 YYYY-MM-DD
 * @returns {string} 今天的日期
 */
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * 从 localStorage 读取 pomodoro_completions
 * @returns {Object} 完成记录对象，不存在时返回空对象
 */
function getCompletions() {
    const completions = localStorage.getItem('pomodoro_completions');
    return completions ? JSON.parse(completions) : {};
}

// ====== PWA Service Worker 注册 ======
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then((registration) => {
                console.log('Service Worker 注册成功:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker 注册失败:', error);
            });
    });
}

// ====== PWA 安装提示（仅 Chrome 支持） ======
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // 延迟3秒后显示安装提示
    setTimeout(() => {
        if (deferredPrompt) {
            showInstallPrompt();
        }
    }, 30000);
});

function showInstallPrompt() {
    // 创建安装提示横幅
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border-radius: 20px;
        padding: 16px 20px;
        box-shadow: 0 8px 32px rgba(201,167,235,0.3);
        z-index: 300;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 360px;
        border: 1px solid rgba(201,167,235,0.2);
        animation: toast-in 0.3s ease-out;
    `;
    banner.innerHTML = `
        <div style="flex-shrink:0;width:48px;height:48px;">${Icons.hamster}</div>
        <div style="flex:1;">
            <div style="font-size:14px;font-weight:bold;color:#4A3A5C;margin-bottom:2px;">安装番茄钟陪伴</div>
            <div style="font-size:12px;color:#8A7A9C;">添加到桌面，随时专注</div>
        </div>
        <button onclick="installApp()" style="
            background: linear-gradient(135deg, #C9A7EB, #B895D6);
            color: white;
            border: none;
            border-radius: 16px;
            padding: 8px 16px;
            font-size: 13px;
            cursor: pointer;
            font-family: var(--font-family-display);
            flex-shrink: 0;
        ">安装</button>
        <button onclick="this.parentElement.remove()" style="
            background: none;
            border: none;
            color: #AAA;
            font-size: 18px;
            cursor: pointer;
            padding: 0 4px;
        ">×</button>
    `;
    document.body.appendChild(banner);
}

function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('用户接受了安装');
        } else {
            console.log('用户拒绝了安装');
        }
        deferredPrompt = null;
        // 移除安装横幅
        const banner = document.querySelector('[style*="fixed"][style*="bottom"]');
        if (banner) banner.remove();
    });
}
