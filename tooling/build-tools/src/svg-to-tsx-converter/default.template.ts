/**
 * Exports a Babel template to let SVGR generate React components for a
 * provided SVG file.
 *
 * This template adds the repo's Tailwind className conformer cn()
 *
 * This template adds class-variance-authority to provide typesafe size variants
 */

export const defaultTemplate = (variables: any, { tpl }: { tpl: any }) => {
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
        default: "h-auto w-64",
        full: "h-auto w-full",
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
