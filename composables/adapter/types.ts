import type { Module } from '@prisma/client'

// the platform property is removed and replaced with an optional string[].
// export type NModule = Omit<Module, 'id' | 'createdAt' | 'updatedAt' | 'platform' | 'flowId'> & {
// 	id?: string
// 	createdAt?: Date
// 	updatedAt?: Date
// 	platform?: string[]
// 	flowId?: string
// }

export interface NModule {
	title: string;
	url: string;
	image?: string;
	content: string;
	date: Date;
	platform?: string[];
}