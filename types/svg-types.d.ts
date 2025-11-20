export type SVG = {
    name: string;
    element: JSX.Element;
    active?: boolean;
    disabledElement?: JSX.Element;
};

export type SVGList = SVG[];