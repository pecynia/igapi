import React from 'react'
import { Locale } from '@../../../i18n.config'
import { getDictionary } from '@/lib/dictionary'
import EditorWrapper from '@/app/[lang]/components/editor/EditorWrapper'

const ReviewFooter: React.FC<{ lang: Locale }> = async ({ lang }) => {
    
    const { benefits, navigation } = await getDictionary(lang)

    return (
        <div className='-mt-64 bg-background pb-10'>
            <div className='container mx-auto px-4 py-24'>
                <div className='flex flex-col items-center justify-center text-center w-full lg:w-2/3 mx-auto'>
                    <EditorWrapper initialLocale={lang} documentId='overview-footer' buttonText={benefits.CTA} link={`/${lang}${navigation.agenda.href}`} />
                </div>
            </div>
        </div>
    )
}

export default ReviewFooter