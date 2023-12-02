export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="max-w-6xl mx-auto p-10">
            <div className="flex flex-col gap-4 w-full">
                <div className="skeleton w-40 h-40 rounded-full shrink-0"></div>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    );
}
