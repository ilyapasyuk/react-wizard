// Type definitions for react-onboarding 1.2.1
// Project: https://github.com/ilyapasyuk/react-onboarding#readme
// Definitions by: ilyapasyuk <https://github.com/ilyapasyuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react'

interface WizardStep {
  elementId: string
  title: string
  description?: string
}

export interface WizardProps {
  isShow?: boolean
  rule: Step[]
  prevButtonTitle?: string
  nextButtonTitle?: string
}

export default class Wizard extends React.Component<WizardProps> {}
