import type { Module } from '@prisma/client'

// the platform property is removed and replaced with an optional string[].
export type Modulex = Omit<Module, 'platform'> & {
	platform?: string[]
}
