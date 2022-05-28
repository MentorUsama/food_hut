export const palette = (mode) => ({
    ...(
        mode === 'light' ?
            {
                primary: {
                    main: '#F54748',
                },
                secondary: {
                    main: '#FDC55E',
                },
                ternary: {
                    main: '#191919',
                },
                text: {
                    primary: '#F54748',
                    secondary: '#FDC55E',
                    ternary: '#191919',
                },
                background: {
                    paper: '#FFFFFF',
                    default: '#FFFFFF'
                },
                gradient: {
                    primary: 'linear-gradient(179.69deg, rgba(255, 255, 255, 0) -31.53%, #F54748 303.75%)',
                    secondary: 'linear-gradient(180deg, rgba(245, 71, 72, 0.06) 0%, rgba(245, 71, 72, 0) 100%)'
                }
            }
            :
            {
                primary: {
                    main: '#F65F5F',
                },
                secondary: {
                    main: '#FDCE77',
                },
                ternary: {
                    main: '#FFFFFF',
                },
                text: {
                    primary: '#F54748',
                    secondary: '#FDC55E',
                    ternary: '#FFFFFF',
                },
                background: {
                    paper: '#191919',
                    default: '#191919'
                },
                gradient: {
                    primary: 'linear-gradient(179.69deg, rgba(255, 255, 255, 0) -31.53%, #F54748 303.75%)',
                    secondary: 'linear-gradient(180deg, rgba(245, 71, 72, 0.06) 0%, rgba(245, 71, 72, 0) 100%)'
                }

            }
    ),
})
