// Type definitions for react-onboarding 1.2.1
// Project: https://github.com/ilyapasyuk/react-onboarding#readme
// Definitions by: ilyapasyuk <https://github.com/ilyapasyuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react'

export interface WizardStep {
  elementId: string
  title: string
  description?: string
}

export enum WIZARD_POSITION {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export interface Coordinates {
  top: number
  left: number
}

export interface WizardProps {
  isShow?: boolean
  rule: WizardStep[]
  prevButtonTitle?: string
  nextButtonTitle?: string
  closeButtonTitle?: string
  closeButtonElement?: React.ReactNode
  lineColor?: string
  pinColor?: string
  position?: WIZARD_POSITION
}

export default class Wizard extends React.Component<WizardProps> {}
