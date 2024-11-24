'use client'

import React from 'react';
import {useRouter} from "next/router";

const TestComp = () => {
    const router = useRouter();

    return (
        <div>
            <button
                onClick={() =>
                    router.push("/movie/123").catch((e) => console.error(e))
                }
            >
                Перейти к фильму
            </button>
        </div>
    );
};

export default TestComp;
