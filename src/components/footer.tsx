import React from "react"

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 mx-auto h-[60px] z-50 text-white">
            <div className="flex flex-row justify-between">
                <div className="relative h-32 flex items-end">
                    <div className="flex -space-x-5 justify-center -ml-12 -mb-12">
                        <div className="w-56 h-56 bg-white rounded-full shadow-lg"></div>
                        <div className="w-36 h-36 bg-white rounded-full -ml-8 mt-12"></div>
                        <div className="w-32 h-32 bg-white rounded-full shadow-lg -ml-6 mt-24"></div>
                    </div>
                </div>
                <div className="relative h-32 flex items-end">
                    <div className="flex -space-x-5 justify-center -mr-16 -mb-12">
                        <div className="w-36 h-36 bg-white rounded-full -mr-12 mt-24"></div>
                        <div className="w-32 h-32 bg-white rounded-full -mr-12 mt-24"></div>
                        <div className="w-56 h-56 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}