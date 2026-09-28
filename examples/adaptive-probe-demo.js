/**
 * DFI adaptive probe demo
 * MIT-licensed reference code. See ../LICENSE.md
 *
 * Teaching example only: demonstrates how evidence can update hypotheses.
 * It is not an automated root-cause engine.
 */

const hypotheses = [
  { id: 'H1', statement: 'The UI issue originates in local component state.', score: 0.5 },
  { id: 'H2', statement: 'The UI issue originates in the API response.', score: 0.5 }
];

const probes = [
  {
    id: 'P1',
    question: 'Is the API response already incorrect before rendering?',
    cost: 1,
    risk: 0,
    discriminate(observation) {
      return observation.apiPayloadIncorrect
        ? { H1: -0.35, H2: 0.35 }
        : { H1: 0.25, H2: -0.25 };
    }
  },
  {
    id: 'P2',
    question: 'Does component state diverge from a correct API payload?',
    cost: 2,
    risk: 0,
    discriminate(observation) {
      return observation.componentStateIncorrect
        ? { H1: 0.4, H2: -0.2 }
        : { H1: -0.2, H2: 0.1 };
    }
  }
];

const clamp = (value) => Math.max(0, Math.min(1, value));

function applyEvidence(state, deltas) {
  return state.map((h) => ({ ...h, score: clamp(h.score + (deltas[h.id] ?? 0)) }));
}

function nextBestProbe(remaining) {
  return [...remaining].sort((a, b) => {
    const valueA = 1 / (1 + a.cost + a.risk);
    const valueB = 1 / (1 + b.cost + b.risk);
    return valueB - valueA;
  })[0];
}

let state = hypotheses;
let remaining = [...probes];

const observation = {
  apiPayloadIncorrect: false,
  componentStateIncorrect: true
};

console.log('DFI demo — initial hypotheses');
console.table(state);

while (remaining.length) {
  const probe = nextBestProbe(remaining);
  console.log(`\nExecuting ${probe.id}: ${probe.question}`);
  state = applyEvidence(state, probe.discriminate(observation));
  console.table(state);
  remaining = remaining.filter((p) => p.id !== probe.id);

  const strongest = [...state].sort((a, b) => b.score - a.score)[0];
  if (strongest.score >= 0.85) {
    console.log(`Evidence currently supports ${strongest.id}: ${strongest.statement}`);
    break;
  }
}

console.log('\nDFI rule: treat this as a hypothesis supported by captured evidence, then verify the correction.');