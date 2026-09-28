# DFI Terminology

| Term | Meaning |
|---|---|
| Instance | A concrete observable manifestation of a state or behavior under investigation. |
| Diagnostic test | A controlled action intended to discriminate between hypotheses. |
| Probe | Short technical synonym for a diagnostic test or instrumentation point. |
| Probe surface | A place where evidence can be observed or instrumented. |
| Next-best probe | The test expected to reduce the most relevant uncertainty at acceptable cost and risk. |
| Evidence | Observable system output that supports or contradicts a hypothesis. |
| Origin point | The place where the relevant behavior is introduced or generated. |
| Divergence point | The point at which two relevant execution or state paths begin to differ. |
| Root cause | A cause sufficiently supported by evidence to explain the investigated behavior at the required scope. |
| Tracing | Following evidence across components or layers. |
| Verification | Re-testing after correction to establish whether intended behavior is restored. |
| Human-in-the-loop | Engineer supervision over AI proposals, execution decisions, risk, and final conclusions. |

## Important distinction
DFI does not require a pair of instances. A single failing button, HTTP request, plugin hook, database record, route guard, process, or configuration state can be the investigated instance. Comparison is useful only when it increases diagnostic information.