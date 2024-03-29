/**
 * Exports a Babel template to let SVGR generate React components for a
 * provided SVG file.
 *
 * This template adds the repo's Tailwind className conformer cn()
 *
 * This template adds class-variance-authority to provide typesafe size variants
 */

export const iconTemplate = (variables: any, { tpl }: { tpl: any }) => {
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
