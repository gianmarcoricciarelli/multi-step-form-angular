export type StepInfo = { title: string; description: string }
type StepInfos = Record<string, StepInfo>

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
