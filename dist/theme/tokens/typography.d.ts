export declare const fonts: {
    sans: string;
    mono: string;
};
declare module '@mui/material/styles' {
    interface TypographyVariants {
        monoBody: React.CSSProperties;
        monoCaption: React.CSSProperties;
        body2Medium: React.CSSProperties;
        body2Bold: React.CSSProperties;
        captionBold: React.CSSProperties;
        micro: React.CSSProperties;
        splashTitle: React.CSSProperties;
        splashSubtitle: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        monoBody?: React.CSSProperties;
        monoCaption?: React.CSSProperties;
        body2Medium?: React.CSSProperties;
        body2Bold?: React.CSSProperties;
        captionBold?: React.CSSProperties;
        micro?: React.CSSProperties;
        splashTitle?: React.CSSProperties;
        splashSubtitle?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        monoBody: true;
        monoCaption: true;
        body2Medium: true;
        body2Bold: true;
        captionBold: true;
        micro: true;
        splashTitle: true;
        splashSubtitle: true;
    }
}
export declare const typography: {
    fontFamily: string;
    h1: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h2: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h3: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
    h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    h5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    h6: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
        lineHeight: number;
    };
    body1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    body2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    body2Medium: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    body2Bold: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    button: {
        fontSize: string;
        fontWeight: number;
        textTransform: "none";
        letterSpacing: string;
    };
    caption: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    captionBold: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    micro: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
        lineHeight: number;
    };
    monoBody: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    monoCaption: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    splashTitle: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
        lineHeight: number;
    };
    splashSubtitle: {
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
    };
};
