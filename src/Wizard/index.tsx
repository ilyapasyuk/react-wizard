'use client'
import React, { useState, useEffect } from 'react'

import style from './style.module.css'
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
      className={style.Wizard__Wrapper}
      data-wizard-onboarding
    >
      <div className={style.Wizard__Container}>
        <div className={style.Wizard__Info}>
          <div className={style.Wizard__Count}>
            {currentStepNumber + 1} of {rule.length}
          </div>
          <button onClick={() => setShow(false)} className={style.Wizard__CloseButton}>
            Close
          </button>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: currentStepContent.title }}
          className={style.Wizard__Title}
        />
        <div className={style.Wizard__Description}>{currentStepContent.description}</div>

        <div className={style.Wizard__Footer}>
          {currentStepNumber !== 0 && (
            <button
              onClick={() => onStepButtonClick(currentStepNumber - 1)}
              className={style.Wizard__Button}
            >
              {prevButtonTitle}
            </button>
          )}

          {currentStepNumber !== rule.length - 1 && (
            <button
              onClick={() => onStepButtonClick(currentStepNumber + 1)}
              className={style.Wizard__Button}
            >
              {nextButtonTitle}
            </button>
          )}
        </div>
      </div>

      <div className={style.Wizard__Pin} />
      <div className={style.Wizard__Line} />
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
