'use client'
import React, { useState, useEffect } from 'react'

import './style.css'
import { Coordinates, WizardProps, WizardStep } from './types'

const Wizard = ({
  isShow = true,
  rule,
  prevButtonTitle = 'Prev',
  nextButtonTitle = 'Next',
  closeButtonTitle = 'Close',
  closeButtonElement,
  pinColor = '#1787fc',
  lineColor = '#1787fc',
  isScrollToElement = false,
}: WizardProps) => {
  const [isShowState, setShow] = useState<boolean>(isShow)
  const [coordinates, setCoordinates] = useState<Coordinates>({ top: 0, left: 0 })

  const [currentStepNumber, setCurrentStepNumber] = useState<number>(0)
  const currentStepContent = getStep(currentStepNumber, rule)

  useEffect(() => {
    setCoordinates(getCoords(getStep(currentStepNumber, rule).elementId, isScrollToElement))
  }, [rule])

  const onStepButtonClick = (stepNumber: number): void => {
    setCurrentStepNumber(stepNumber)
    setCoordinates(getCoords(getStep(stepNumber, rule).elementId, isScrollToElement))
  }

  if (!isShowState || !coordinates) {
    return null
  }

  return (
    <div
      style={{ left: coordinates.left, top: coordinates.top }}
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

function getCoords(elementId: string, isScrollToElement?: boolean): Coordinates {
  const element = document.getElementById(elementId)
  const coordinates = element?.getBoundingClientRect()

  const top = (coordinates?.top || 0) + (coordinates?.height || 0) / 2 + window.scrollY
  const left = (coordinates?.left || 0) + (coordinates?.width || 0)

  if (isScrollToElement) {
    window.scrollTo({
      top: top - window.innerHeight / 2,
      behavior: 'smooth',
    })
  }

  return {
    top,
    left,
  }
}

export default Wizard
