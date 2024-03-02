/**
 * Exports a Babel template to let SVGR generate React components for a
 * provided SVG file.
 *
 * This template adds the repo's Tailwind className conformer cn()
 *
 * This template adds class-variance-authority to provide typesafe size variants
 */

const getAttributeValue = (jsx: any, name: string) => {
  return jsx.find((e: any) => {
    return e.name.name === name;
  });
};

export const iconTemplate = (variables: any, { tpl }: { tpl: any }) => {
  const widthAttr = getAttributeValue(
    variables.jsx.openingElement.attributes,
    "width"
  );
  const heightAttr = getAttributeValue(
    variables.jsx.openingElement.attributes,
    "height"
  );

  variables.jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "className" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "Identifier",
        name: "computedClassName",
      },
    },
  });

  const width = widthAttr.value.expression.value;
  const height = heightAttr.value.expression.value;
  const aspectRatio = width / height;

  const widthExpr = tpl(
    `props.width || (props.height && Math.floor(+props.height * ${aspectRatio})) || ${width}`
  );
  const heightExpr = tpl(
    `props.height || (props.width && Math.floor(+props.width / ${aspectRatio})) || ${height}`
  );

  widthAttr.value.expression = widthExpr.expression;
  heightAttr.value.expression = heightExpr.expression;

  return tpl`
import * as React from "react";
import type { SVGProps } from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@repo/helpers"
 
const iconVariants = cva(
  "inline-flex",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6",
        lg: "h-12 w-12",
        xs: "h-4 w-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface IconProps
  extends SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {}

const ${variables.componentName} = ({ className, size, ...props }: IconProps) => {
  const computedClassName = cn(iconVariants({ size, className }));
  return (
    ${variables.jsx}
  )
};
 
${variables.exports};
`;
};
