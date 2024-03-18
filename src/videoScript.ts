import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'

import { LLMChain } from 'langchain/chains'

import { createScriptTemplate, summary, temp } from './promptTemplates/templates'

export const createShortScript = async ({ language, topic }: { language: string; topic: string }) => {
	try {
		console.log('Creating Script...')

		const model = new OpenAI({
			openAIApiKey: process.env.OPENAI_API,
			temperature: 0.7,
			modelName: 'gpt-3.5-turbo-0301',
		})

		const prompt = PromptTemplate.fromTemplate(temp)

		// console.log('Prompt: ', prompt)

		const chain = new LLMChain({ llm: model, prompt })

		const res = await chain.call({ language, topic })

		if (!JSON.parse(res.text).script) throw new Error('Error in Script not generated')

		// console.log('Script: ', JSON.parse(res.text))

		return JSON.parse(res.text).script
	} catch (error) {
		console.log('Error in createShortScript: ', error)
	}
}
export const summarizeShortScript = async ({ script }: { script: string }) => {
	try {
		console.log('Script...')

		const model = new OpenAI({
			openAIApiKey: process.env.OPENAI_API,
			temperature: 0.1,
			modelName: 'gpt-4',
		})

		const prompt = PromptTemplate.fromTemplate(summary)

		// console.log('Prompt: ', prompt)

		const chain = new LLMChain({ llm: model, prompt })

		const res = await chain.call({ script })

		if (!JSON.parse(res.text).script) throw new Error('Error in Script not generated')

		// console.log('Script: ', JSON.parse(res.text))

		return JSON.parse(res.text).script
	} catch (error) {
		console.log('Error in createShortScript: ', error)
	}
}
