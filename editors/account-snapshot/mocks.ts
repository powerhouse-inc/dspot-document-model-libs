import { AccountSnapshotState } from 'document-model-libs/account-snapshot';

export const accountSnapshotStateMock: AccountSnapshotState = {
    start: '2023-09-22T15:24:23.000Z',
    end: '2023-09-22T15:24:23.000Z',
    id: '13782',
    period: '2023/08',
    ownerType: 'EcosystemActor',
    ownerId: '52',
    snapshotAccount: [
        {
            upstreamAccountId: null,
            snapshotAccountBalance: [
                {
                    initialBalance: -424085.1260796727,
                    token: 'DAI',
                    newBalance: -424085.1260796727,
                    inflow: 0,
                    outflow: 0,
                    includesOffChain: true,
                    id: '222979',
                },
                {
                    initialBalance: -424085.1260796727,
                    token: 'DAI',
                    newBalance: -424085.1260796727,
                    inflow: 0,
                    outflow: 0,
                    includesOffChain: false,
                    id: '222986',
                },
            ],
            id: '116075',
            accountLabel: 'Maker Protocol Wallet',
            accountType: 'singular',
            accountAddress: '0xbe8e3e3618f7474f8cb1d074a26affef007e98fb',
            groupAccountId: '116077',
            offChain: false,
            snapshotAccountTransaction: [],
        },
        {
            upstreamAccountId: '116075',
            snapshotAccountBalance: [
                {
                    initialBalance: 166835.12607967271,
                    token: 'DAI',
                    newBalance: 166835.12607967271,
                    inflow: 0,
                    outflow: 0,
                    includesOffChain: true,
                    id: '222977',
                },
                {
                    initialBalance: 166835.12607967271,
                    token: 'DAI',
                    newBalance: 166835.12607967271,
                    inflow: 0,
                    outflow: 0,
                    includesOffChain: false,
                    id: '222987',
                },
            ],
            id: '116073',
            accountLabel: 'Viridian Protector Advisory Company Auditor',
            accountType: 'singular',
            accountAddress: '0xbb8aa212267477c3dbff6643e497919ec2e3dec9',
            groupAccountId: '116079',
            offChain: false,
            snapshotAccountTransaction: [],
        },
        {
            upstreamAccountId: '116073',
            snapshotAccountBalance: [
                {
                    initialBalance: 132304.37000000002,
                    token: 'DAI',
                    newBalance: 104704.45000000003,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: true,
                    id: '222978',
                },
                {
                    initialBalance: 132304.37000000002,
                    token: 'DAI',
                    newBalance: 104704.45000000003,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: false,
                    id: '222989',
                },
            ],
            id: '116074',
            accountLabel: 'Viridian Protector Advisory Company',
            accountType: 'singular',
            accountAddress: '0xa1e62c6321eed0ecfcf2f382c8c82fd940d83c07',
            groupAccountId: '116079',
            offChain: false,
            snapshotAccountTransaction: [
                {
                    id: '111820',
                    block: 18192251,
                    timestamp: '2023-09-22T15:24:23.000Z',
                    txHash: '0x67fa4d56d288aa45818fbcc18a1d0b1974b272463e3be910ee1105668cc2cef0',
                    token: 'DAI',
                    counterParty: '0x3c267dfc8ba8f7359af0d8afc45b43731173236d',
                    amount: -22599.92,
                    txLabel: 'Top-up',
                    counterPartyName: 'Accountable Payment Processor',
                },
                {
                    id: '111819',
                    block: 18192251,
                    timestamp: '2023-09-22T15:24:23.000Z',
                    txHash: '0x67fa4d56d288aa45818fbcc18a1d0b1974b272463e3be910ee1105668cc2cef0',
                    token: 'DAI',
                    counterParty: '0x8e07e61216629d0fe9e8d0334da6ac41a8d11b31',
                    amount: -5000,
                    txLabel: 'External Transaction',
                    counterPartyName: 'External Address',
                },
            ],
        },
        {
            upstreamAccountId: '116074',
            snapshotAccountBalance: [
                {
                    initialBalance: 112445.63,
                    token: 'DAI',
                    newBalance: 135045.55,
                    inflow: 22599.92,
                    outflow: 0,
                    includesOffChain: true,
                    id: '222980',
                },
            ],
            id: '116076',
            accountLabel: 'Accountable Payment Processor',
            accountType: 'singular',
            accountAddress: '0x3c267dfc8ba8f7359af0d8afc45b43731173236d',
            groupAccountId: '116080',
            offChain: true,
            snapshotAccountTransaction: [
                {
                    id: '111821',
                    block: 18192251,
                    timestamp: '2023-09-22T15:24:23.000Z',
                    txHash: '0x67fa4d56d288aa45818fbcc18a1d0b1974b272463e3be910ee1105668cc2cef0',
                    token: 'DAI',
                    counterParty: '0xa1e62c6321eed0ecfcf2f382c8c82fd940d83c07',
                    amount: 22599.92,
                    txLabel: 'Top-up',
                    counterPartyName: 'Viridian Protector Advisory Company',
                },
            ],
        },
        {
            upstreamAccountId: '116075',
            snapshotAccountBalance: [
                {
                    initialBalance: 299139.4960796727,
                    token: 'DAI',
                    newBalance: 271539.5760796727,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: true,
                    id: '222981',
                },
                {
                    initialBalance: 299139.4960796727,
                    token: 'DAI',
                    newBalance: 271539.5760796727,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: false,
                    id: '222990',
                },
            ],
            id: '116079',
            accountLabel: 'On-Chain Reserves',
            accountType: 'group',
            accountAddress: null,
            groupAccountId: '116078',
            offChain: false,
            snapshotAccountTransaction: [],
        },
        {
            upstreamAccountId: '116075',
            snapshotAccountBalance: [
                {
                    initialBalance: 112445.63,
                    token: 'DAI',
                    newBalance: 135045.55,
                    inflow: 22599.92,
                    outflow: 0,
                    includesOffChain: true,
                    id: '222982',
                },
                {
                    initialBalance: 0,
                    token: 'DAI',
                    newBalance: 0,
                    inflow: 0,
                    outflow: 0,
                    includesOffChain: false,
                    id: '222985',
                },
            ],
            id: '116080',
            accountLabel: 'Off-Chain Reserves',
            accountType: 'group',
            accountAddress: null,
            groupAccountId: '116078',
            offChain: true,
            snapshotAccountTransaction: [],
        },
        {
            upstreamAccountId: null,
            snapshotAccountBalance: [
                {
                    initialBalance: -12500,
                    token: 'DAI',
                    newBalance: -17500,
                    inflow: 0,
                    outflow: -5000,
                    includesOffChain: true,
                    id: '222984',
                },
                {
                    initialBalance: -124945.63,
                    token: 'DAI',
                    newBalance: -152545.55,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: false,
                    id: '222988',
                },
            ],
            id: '116077',
            accountLabel: 'Root',
            accountType: 'group',
            accountAddress: null,
            groupAccountId: null,
            offChain: false,
            snapshotAccountTransaction: [],
        },
        {
            upstreamAccountId: '116075',
            snapshotAccountBalance: [
                {
                    initialBalance: 411585.1260796727,
                    token: 'DAI',
                    newBalance: 406585.1260796727,
                    inflow: 0,
                    outflow: -5000,
                    includesOffChain: true,
                    id: '222983',
                },
                {
                    initialBalance: 299139.4960796727,
                    token: 'DAI',
                    newBalance: 271539.5760796727,
                    inflow: 0,
                    outflow: -27599.92,
                    includesOffChain: false,
                    id: '222991',
                },
            ],
            id: '116078',
            accountLabel: 'Core Unit Reserves',
            accountType: 'group',
            accountAddress: null,
            groupAccountId: '116077',
            offChain: false,
            snapshotAccountTransaction: [],
        },
    ],
    actualsComparison: [
        {
            month: '2023/08',
            currency: 'DAI',
            reportedActuals: 137820000,
            netExpenses: {
                onChainOnly: {
                    amount: 137821253,
                    difference: 1.0000090915687128,
                },
                offChainIncluded: {
                    amount: 137820100,
                    difference: 1.0000007255840953,
                },
            },
        },
        {
            month: '2023/07',
            currency: 'DAI',
            reportedActuals: 137820000,
            netExpenses: {
                onChainOnly: {
                    amount: 137821253,
                    difference: 1.0000090915687128,
                },
                offChainIncluded: {
                    amount: 137820100,
                    difference: 1.0000007255840953,
                },
            },
        },
        {
            month: '2023/06',
            currency: 'DAI',
            reportedActuals: 137820000,
            netExpenses: {
                onChainOnly: {
                    amount: 137821253,
                    difference: 1.0000090915687128,
                },
                offChainIncluded: {
                    amount: 137820100,
                    difference: 1.0000007255840953,
                },
            },
        },
    ],
};
