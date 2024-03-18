// Type definitions for react-onboarding 1.2.1
// Project: https://github.com/ilyapasyuk/react-onboarding#readme
// Definitions by: ilyapasyuk <https://github.com/ilyapasyuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react'

export interface WizardStep {
  elementId: string
  title: string
  description?: string | React.ReactNode
}

export interface Coordinates {
  top: number
  left: number
}

export interface WizardProps {
  rule: WizardStep[]
  isShow?: boolean
  prevButtonTitle?: string
  nextButtonTitle?: string
  closeButtonTitle?: string
  closeButtonElement?: React.ReactNode
  lineColor?: string
  pinColor?: string
  isScrollToElement?: boolean
}

export default class Wizard extends React.Component<WizardProps> {}
