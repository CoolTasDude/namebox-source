// Copyright (c) 2012-2022 John Nesky and contributing authors, distributed under the MIT license, see accompanying the LICENSE.md file.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";
import { Config } from "../synth/SynthConfig";

const { button, div, p, h2, h3 } = HTML;

export class TipPrompt implements Prompt {
	private readonly _closeButton: HTMLButtonElement = button({ class: "cancelButton" });

	public readonly container: HTMLDivElement;

	constructor(private _doc: SongDocument, type: string) {
		let message: HTMLDivElement;

		switch (type) {
			case "scale": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "key": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "key_octave": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p(`This goes from ${Config.octaveMin} to ${Config.octaveMax}.`),
				);
			} break;
			case "tempo": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "reverb": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "rhythm": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "instrumentIndex": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "instrumentVolume": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "pan": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "panDelay":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text"),
						p("Paragraph of text")
					);
				}
				break;
			case "arpeggioSpeed":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				}
				break;
			case "twoNoteArpeggio":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				}
				break;
			case "monophonic": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "detune": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "instrumentType": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "eqFilter": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "noteFilter": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "fadeInOut": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "transition": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "chipWave": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "chipNoise": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "supersawDynamism": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "supersawSpread": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "supersawShape": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "pulseWidth": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "unison": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "chords": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "vibrato": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "vibratoDepth":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				} break;
			case "vibratoDelay":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				} break;
			case "vibratoSpeed":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				}
				break;
			case "vibratoType":
				{
					message = div(
						h2("Popup Header"),
						p("Paragraph of text")
					);
				}
				break;
			case "algorithm": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "feedbackType": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "feedbackVolume": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "operatorFrequency": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "operatorVolume": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "spectrum": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "harmonics": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "effects": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "drumsetEnvelope": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "drumsetSpectrum": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "chorus": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "echoSustain": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "echoDelay": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "pitchShift": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			// case "detune": {
			// 	message = div(
			// 		h2("Popup Header"),
			// 		p("Paragraph of text"),
			// 	);
			// } break;
			case "distortion": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "bitcrusherQuantization": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "bitcrusherFreq": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "envelopes": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "discreteEnvelope": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "envelopeSpeed": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "perEnvelopeSpeed": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p(HTML.a({ href: "./faq.html", target: "_blank" }, "Clickable Link")),
					p("Paragraph of text"),
				);
			} break;
			case "usedInstrument": {
				message = div(
					h3("'Tip'"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "usedPattern": {
				message = div(
					h3("'Tip'"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "modChannel": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "modInstrument": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "modSet": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "modFilter": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "transitionBar": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "clicklessTransition": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "aliases": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "operatorWaveform": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "filterType": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "filterCutoff": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "filterResonance": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "loopControls":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"));
				}
				break;
			case "loopMode":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"), p("Paragraph of text"), p("Paragraph of text"), p("Paragraph of text"), p("Paragraph of text"));
				}
				break;
			case "loopStart":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"), p("Paragraph of text"));
				}
				break;
			case "loopEnd":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"), p("Paragraph of text"), p("Paragraph of text"));
				}
				break;
			case "offset":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"));
				}
				break;
			case "backwards":
				{
					message = div(h2("Popup Header"), p("Paragraph of text"));
				}
				break;
			case "decimalOffset": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "unisonVoices": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "unisonSpread": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "unisonOffset": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "unisonExpression": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "unisonSign": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "pitchRange": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "noteSizeRange": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "envelopeInvert": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "envelopeRange": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				)
			} break;
			case "modEnvelope": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "randomSteps": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "randomSeed": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "songeq": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),
					p("Paragraph of text"),				
				);
			} break;
			case "lfoEnvelopeWaveform": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text"),
				);
			} break;
			case "randomEnvelopeType": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "ringMod": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "RingModHz": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					// p(`The offset allows you to increment the Hertz by 1.`),
				);
			} break;
			case "ringModChipWave": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "granular": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
					p("Paragraph of text")
				);
			} break;
			case "grainSize": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "grainAmount": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			case "grainRange": {
				message = div(
					h2("Popup Header"),
					p("Paragraph of text"),
				);
			} break;
			

			default:
				// Check for modSetinfo#
				if (type.indexOf("modSetInfo") >= 0) {
					let modNum: number = +type[type.length - 1];
					let modulator: number = _doc.song.channels[_doc.channel].instruments[_doc.getCurrentInstrument()].modulators[modNum];
					let pList: HTMLParagraphElement[] = [];
					for (let s: number = 0; s < Config.modulators[modulator].promptDesc.length; s++) {
						pList.push(p(
							Config.modulators[modulator].promptDesc[s]
								.replace("$LO", "" + Config.modulators[modulator].convertRealFactor)
								.replace("$MID", "" + (Config.modulators[modulator].convertRealFactor + Config.modulators[modulator].maxRawVol / 2))
								.replace("$HI", "" + (Config.modulators[modulator].convertRealFactor + Config.modulators[modulator].maxRawVol))

						));
					}
					// Last element for mod settings is just some miscellaneous data for nerds like me.
					pList[pList.length - 1].style.setProperty("color", "var(--secondary-text)");
					message = div(
						h2(Config.modulators[modulator].promptName),
						pList,
					);
					break;
				}
				else {
					throw new Error("Unhandled TipPrompt type: " + type);
				}
		}

		this.container = div({ class: "prompt", style: "width: 300px;" },
			message,
			this._closeButton,
		);

		setTimeout(() => this._closeButton.focus());

		this._closeButton.addEventListener("click", this._close);
	}

	private _close = (): void => {
		this._doc.undo();
	}

	public cleanUp = (): void => {
		this._closeButton.removeEventListener("click", this._close);
	}
}