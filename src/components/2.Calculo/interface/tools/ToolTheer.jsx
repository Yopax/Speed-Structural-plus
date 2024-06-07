"use client";
import useStore from "@/store/useStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React from 'react';

function ToolTheer() {
  const { dimclx, dimcly, setDimclx, setDimcly , npa, setNpa, dimplx, dimply, setDimplx, setDimply, lcol, setLcol,
    dimvlx, dimvly, setDimvlx, setDimvly, lvx, setLvx,dimvlx2, dimvly2, setDimvlx2, setDimvly2, lvy, setLvy,
    cv1, setCv1, cv2, setCv2,
   } = useStore();
  
  return (
    <Dialog>
        <DialogTrigger className="font-sans text-xs h-20 w-20 text-white">
            <div className="flex flex-col items-center justify-center">
                <p>MET</p>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <div className="flex space-x-2">
                        <p className="font-sans">Configuración de Datos</p>
                    </div>
                </DialogTitle>
                <DialogDescription asChild="asChild">
                    <div>
                        
                        <p className="font-sans text-start">
                        Columna
                        </p>
                        
                        <div className="flex">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                        h de columna
                                    </label>
                                    <input
                                        type="number"
                                        value={lcol}
                                        onChange={(e) => setLcol(parseFloat(e.target.value))}
                                        className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="font-sans text-start">
                        Viga
                        </p>
                        <div className="flex">
                            
                        </div>
                       
                        <div className="flex">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                        h x
                                    </label>
                                    <input
                                        type="number"
                                        value={lvx}
                                        onChange={(e) => setLvx(parseFloat(e.target.value))}
                                        className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        
                        
                        <div className="flex">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                        h y
                                    </label>
                                    <input
                                        type="number"
                                        value={lvy}
                                        onChange={(e) => setLvy(parseFloat(e.target.value))}
                                        className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="font-sans text-start">
                        Carga Viva
                        </p>
                        <div className="flex">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                        Primer piso
                                    </label>
                                    <input
                                        type="number"
                                        value={cv1}
                                        onChange={(e) => setCv1(parseFloat(e.target.value))}
                                        className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-col w-full divide-y divide-stone-200 border-x border-y mx-auto">
                                <div className="flex mx-auto">
                                    <label className="w-2/3 px-2 text-stone-600 text-start">
                                        Piso intermedio
                                    </label>
                                    <input
                                        type="number"
                                        value={cv2}
                                        onChange={(e) => setCv2(parseFloat(e.target.value))}
                                        className="w-1/3 text-center flex h-5 text-stone-600 font-sans bg-transparent px-3 text-xs border-l focus-visible:outline-none"
                                    />
                                </div>
                            </div>
                        </div> 
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  );
}

export default ToolTheer;