export type Steps = '1' | '2' | '3' | '4'
export type StepInfo = { title: string; description: string }
type StepInfos = {
    [k in Steps]: StepInfo
}
export const stepInfos: StepInfos = {
    '1': {
        title: 'Personal info',
        description:
            'Please provide your name, email address, and phone number.',
    },
    '2': {
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
    },
    '3': {
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
    },
    '4': {
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
    },
}

type Plans = 'Arcade' | 'Advanced' | 'Pro'
export type PlansBilling = { [k in Plans]: { monthly: string; yearly: string } }
export const plansBilling: PlansBilling = {
    Arcade: { monthly: '$9/mo', yearly: '$90/yr' },
    Advanced: { monthly: '$12/mo', yearly: '$120/yr' },
    Pro: { monthly: '$15/mo', yearly: '$150/yr' },
}
