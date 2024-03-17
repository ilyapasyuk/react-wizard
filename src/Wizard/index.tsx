'use client'
import React, { useState, useEffect } from 'react'

import './style.css'
import { WizardProps, WizardStep } from '../../index'

type Coordinates = {
  top: number
  left: number
}

const Wizard = ({
  isShow = true,
  rule,
  prevButtonTitle = 'Prev',
  nextButtonTitle = 'Next',
  closeButtonTitle = 'Close',
  closeButtonElement,
  pinColor = '#1787fc',
  lineColor = '#1787fc',
}: WizardProps) => {
  const [isShowState, setShow] = useState<boolean>(isShow)
  const [position, setPosition] = useState<Coordinates>({ top: 0, left: 0 })
  const [currentStepNumber, setCurrentStepNumber] = useState<number>(0)
  const currentStepContent = getStep(currentStepNumber, rule)

  useEffect(() => {
    setPosition(getCoords(getStep(currentStepNumber, rule).elementId))
  }, [rule])

  const onStepButtonClick = (stepNumber: number): void => {
    setCurrentStepNumber(stepNumber)
    setPosition(getCoords(getStep(stepNumber, rule).elementId))
  }

  if (!isShowState || !position) {
    return null
  }

  return (
    <div
      style={{ left: position.left, top: position.top }}
      className="Wizard__Wrapper"
      data-wizard-onboarding
    >
      <div className="Wizard__Container">
        <div className="Wizard__Info">
          <div className="Wizard__Count">
            {currentStepNumber + 1} of {rule.length}
          </div>
          {closeButtonElement ? (
            <button onClick={() => setShow(false)} className="Wizard__CloseButton_empty">
              {closeButtonElement}
            </button>
          ) : (
            <button onClick={() => setShow(false)} className="Wizard__CloseButton">
              {closeButtonTitle}
            </button>
          )}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: currentStepContent.title }}
          className="Wizard__Title"
        />
        <div className="Wizard__Description">{currentStepContent.description}</div>

        <div className="Wizard__Footer">
          {currentStepNumber !== 0 && (
            <button
              onClick={() => onStepButtonClick(currentStepNumber - 1)}
              className="Wizard__Button"
            >
              {prevButtonTitle}
            </button>
          )}

          {currentStepNumber !== rule.length - 1 && (
            <button
              onClick={() => onStepButtonClick(currentStepNumber + 1)}
              className="Wizard__Button"
            >
              {nextButtonTitle}
            </button>
          )}
        </div>
      </div>

      <div
        className="Wizard__Pin"
        style={{
          backgroundColor: pinColor,
        }}
      />
      <div
        className="Wizard__Line"
        style={{
          backgroundColor: lineColor,
        }}
      />
    </div>
  )
}

function getStep(stepNumber: number, rules: WizardStep[]): WizardStep {
  return rules[stepNumber]
}

function getCoords(elementId: string): Coordinates {
  const element = document.getElementById(elementId)
  const coordinates = element?.getBoundingClientRect()

  const top = (coordinates?.top || 0) + (coordinates?.height || 0) / 2
  const left = (coordinates?.left || 0) + (coordinates?.width || 0)

  return {
    top,
    left,
  }
}

export default Wizard
