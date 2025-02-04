export type Step = '1' | '2' | '3' | '4'
export type StepInfo = { title: string; description: string }
export type StepInfos = {
    [k in Step]: StepInfo
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

export type Plan = 'Arcade' | 'Advanced' | 'Pro'
export type Billing = 'monthly' | 'yearly'
export type PlanBilling = { [K in Billing]: string }
export const plansWithBillings: Record<Plan, PlanBilling> = {
    Arcade: { monthly: '$9/mo', yearly: '$90/yr' },
    Advanced: { monthly: '$12/mo', yearly: '$120/yr' },
    Pro: { monthly: '$15/mo', yearly: '$150/yr' },
}

export type AddOnName =
    | 'Online service'
    | 'Larger storage'
    | 'Customizable profile'
export type AddOn = {
    name: AddOnName
    description: string
    billing: Record<Billing, string>
}
export const addOns: AddOn[] = [
    {
        name: 'Online service',
        description: 'Access to multiplayer games',
        billing: {
            monthly: '$1/mo',
            yearly: '$10/yr',
        },
    },
    {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        billing: {
            monthly: '$1/mo',
            yearly: '$10/yr',
        },
    },
    {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        billing: {
            monthly: '$2/mo',
            yearly: '$20/yr',
        },
    },
]
